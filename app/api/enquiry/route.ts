import {NextResponse} from 'next/server';
import {getDatabase} from '@/lib/mongodb';
export const runtime = 'nodejs';
export async function POST(request:Request){
 const origin=request.headers.get('origin');const url=new URL(request.url);
 // Next.js may normalize the internal URL to localhost; use the incoming Host for the public origin.
 const publicOrigin=url.protocol+'//'+(request.headers.get('host') || url.host);
 if(origin && origin!==publicOrigin)return NextResponse.json({error:'Request origin is not allowed.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>20000)return NextResponse.json({error:'Your enquiry is too long.'},{status:413});
 let data:Record<string,unknown>;try{const raw=await request.text();if(raw.length>20000)return NextResponse.json({error:'Your enquiry is too long.'},{status:413});const parsed=JSON.parse(raw);if(!parsed || typeof parsed!=='object' || Array.isArray(parsed))throw new Error();data=parsed}catch{return NextResponse.json({error:'Invalid enquiry.'},{status:400})}
 if(data.website)return NextResponse.json({ok:true});
 const field=(key:string,max:number)=>typeof data[key]==='string'?(data[key] as string).trim().slice(0,max):'';
 const name=field('name',120),email=field('email',254);if(!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:'Please provide your name and a valid email address.'},{status:400});
 const key=process.env.RESEND_API_KEY,from=process.env.ENQUIRY_FROM;
 const interests=Array.isArray(data.interests)?data.interests.filter((x):x is string=>typeof x==='string').slice(0,5).map(x=>x.slice(0,120)):[];
 const text=`Name: ${name}\nEmail: ${email}\nCompany: ${field('company',160)}\nPhone: ${field('phone',40)}\nCity: ${field('city',120)}\nInterested in: ${interests.join(', ') || '-'}\n\n${field('message',5000)}`;
 const enquiry={name,email,company:field('company',160),phone:field('phone',40),city:field('city',120),message:field('message',5000),interests,createdAt:new Date(),status:'new',source:'website',notificationStatus:'not_configured'};
 let db,id;
 try{db=await getDatabase();const inserted=await db.collection('enquiries').insertOne(enquiry);id=inserted.insertedId}
 catch{return NextResponse.json({error:'Could not save your enquiry. Please try again or use the email option below.'},{status:503})}
 // Email is optional. Notification failures must not discard a saved enquiry.
 let emailSent=false;
 if(key && from){
  try{const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[process.env.ENQUIRY_TO || 'amandeep@nuotechsolutions.com'],reply_to:email,subject:`Website enquiry from ${name.replace(/[\r\n]/g,' ')}`,text}),signal:AbortSignal.timeout(15000)});emailSent=response.ok}catch{}
  await db.collection('enquiries').updateOne({_id:id},{$set:{notificationStatus:emailSent?'sent':'failed'}}).catch(()=>{});
 }
 return NextResponse.json({ok:true,id:id.toHexString(),stored:true,emailSent,message:'Your enquiry has been received. Thank you for contacting Nuotech Solutions Pvt Ltd.'},{status:201});
}
