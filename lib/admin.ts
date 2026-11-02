import { createHash, timingSafeEqual } from 'node:crypto';

export function adminConfigured() { return Boolean(process.env.ADMIN_PASSWORD); }
export function adminToken(password: string) { return createHash('sha256').update(`nuotech-admin:${password}`).digest('hex'); }
export function validAdminToken(token?: string) {
  if (!token || !process.env.ADMIN_PASSWORD) return false;
  const expected = adminToken(process.env.ADMIN_PASSWORD);
  const a = Buffer.from(token), b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
