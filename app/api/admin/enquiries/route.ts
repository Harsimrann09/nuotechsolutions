import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { validAdminToken } from '@/lib/admin';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  if (!validAdminToken(request.cookies.get('nuotech-admin')?.value)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  try {
    const db = await getDatabase();
    const records = await db.collection('enquiries').find({}).sort({ createdAt: -1 }).limit(200).toArray();
    return NextResponse.json({ enquiries: records.map(item => ({ ...item, _id: item._id.toString(), createdAt: item.createdAt instanceof Date ? item.createdAt.toISOString() : item.createdAt })) });
  } catch { return NextResponse.json({ error: 'Could not load enquiries.' }, { status: 503 }); }
}
