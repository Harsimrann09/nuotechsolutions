"use client";
import {useState,type FormEvent} from 'react';
const interests=['Quick mold change (QMCS)','Quick die change (QDCS)','Robots','Granulators','Screws & barrels'];
export default function ContactForm(){
 const [busy,setBusy]=useState(false);const [note,setNote]=useState('Send your enquiry directly to the Nuotech team.');const [fallback,setFallback]=useState('');
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();const form=e.currentTarget;const data=new FormData(form);if(data.get('website'))return;
  const payload={name:String(data.get('name')||'').trim(),email:String(data.get('email')||'').trim(),company:String(data.get('company')||'').trim(),phone:String(data.get('phone')||'').trim(),city:String(data.get('city')||'').trim(),message:String(data.get('message')||'').trim(),interests:data.getAll('interests').map(String),website:''};
  const subject='Enquiry from '+payload.name;const body=`Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nPhone: ${payload.phone}\nCity: ${payload.city}\nInterested in: ${payload.interests.join(', ')}\n\n${payload.message}`;
  const mailto=`mailto:amandeep@nuotechsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setBusy(true);setFallback('');setNote('Sending your enquiry...');
  try{const res=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await res.json();if(!res.ok){setNote(result.error || 'Could not send your enquiry. Please use the email option below.');setFallback(mailto)}else{setNote(result.message || 'Your enquiry has been received.');form.reset()}}
  catch{setNote('Could not connect. You can send the prepared enquiry using your email app.');setFallback(mailto)}finally{setBusy(false)}
 }
 return <form id="enquiry" className="reveal d2" onSubmit={submit}>
  <div className="row2"><label>Your name<input name="name" required autoComplete="name" maxLength={120}/></label><label>Company<input name="company" autoComplete="organization" maxLength={160}/></label></div>
  <label>Email<input name="email" type="email" required autoComplete="email" maxLength={254}/></label>
  <div className="row2"><label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40}/></label><label>City<input name="city" autoComplete="address-level2" maxLength={120}/></label></div>
  <fieldset style={{border:0,padding:0}}><legend style={{marginBottom:10}}>I'm interested in</legend><div className="interests">{interests.map((item,i)=><span key={item} style={{display:'contents'}}><input type="checkbox" id={`interest-${i}`} name="interests" value={item}/><label htmlFor={`interest-${i}`}>{item}</label></span>)}</div></fieldset>
  <label>Message<textarea name="message" placeholder="Machine make, tonnage, what you'd like to improve..." maxLength={5000}/></label>
  <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <button className="btn btn-primary" type="submit" disabled={busy} style={{justifySelf:'start'}}>{busy?'Sending...':'Send enquiry'} <span aria-hidden="true">&rarr;</span></button>
  <p className="form-note" id="formNote" role="status">{note}{fallback && <><br/><a href={fallback}>Open prepared enquiry in your email app &rarr;</a></>}</p>
 </form>
}
