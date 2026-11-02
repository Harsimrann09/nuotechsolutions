import { NextResponse } from 'next/server';
import { adminConfigured, adminToken } from '@/lib/admin';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!adminConfigured()) return NextResponse.json({ error: 'Admin access is not configured.' }, { status: 503 });
  let body: { password?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (typeof body.password !== 'string' || body.password.length < 1 || body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set('nuotech-admin', adminToken(body.password), { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 8 });
  return response;
}
