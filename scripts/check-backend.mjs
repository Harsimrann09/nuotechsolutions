import nextEnv from '@next/env';
import { MongoClient, ObjectId } from 'mongodb';
import { getMongoConfig } from '../lib/mongodb.ts';

nextEnv.loadEnvConfig(process.cwd(), true);
let client;
try {
  const { uri, database } = getMongoConfig();
  client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000, connectTimeoutMS: 10000, socketTimeoutMS: 15000 });
  await client.connect();
  const db = client.db(database);
  await db.command({ ping: 1 });
  console.log(JSON.stringify({ connection: 'successful', database, collection: 'enquiries' }));
  if (process.argv.includes('--seed')) {
    const run = new Date().toISOString();
    const documents = ['Quick mold change (QMCS)', 'Robots'].map((interest, index) => ({
      _id: new ObjectId(), name: `[TEST] Backend verification ${index + 1}`,
      email: `backend-test-${index + 1}@example.com`, company: '[TEST] Nuotech integration check',
      phone: '', city: 'Test data', interests: [interest],
      message: 'TEST DATA ONLY. Inserted to verify MongoDB connectivity and persistence. No customer enquiry.',
      isTest: true, testRun: run, source: 'backend-verification', status: 'test',
      notificationStatus: 'not_sent_test', createdAt: new Date(),
    }));
    // IDs are fixed before writing, so read-back remains safe after uncertain responses.
    await db.collection('enquiries').insertMany(documents);
    const saved = await db.collection('enquiries').find({ _id: { $in: documents.map(d => d._id) } }).toArray();
    if (saved.length !== documents.length) throw new Error('Test records could not be read back.');
    console.log(JSON.stringify({ inserted: saved.length, readBackVerified: true, ids: saved.map(d => d._id.toHexString()) }));
  }
  if (process.argv.includes('--api')) {
    const response = await fetch('http://127.0.0.1:3000/api/enquiry', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'http://127.0.0.1:3000' },
      body: JSON.stringify({ name: '[TEST] Website API verification', email: 'api-test@example.com', company: '[TEST] Backend integration', message: 'TEST DATA ONLY. Verifies website API persistence.', interests: ['Granulators'] }),
      signal: AbortSignal.timeout(45000),
    });
    const result = await response.json();
    if (response.status !== 201 || !result.stored || !ObjectId.isValid(result.id)) {
      console.error(JSON.stringify({api: 'failed', status: response.status, error: result.error}));
      throw new Error('Website API verification failed.');
    }
    const id = new ObjectId(result.id);
    const saved = await db.collection('enquiries').findOne({ _id: id });
    if (saved?.email !== 'api-test@example.com') throw new Error('API record could not be read back.');
    await db.collection('enquiries').updateOne({ _id: id }, { $set: { isTest: true, status: 'test' } });
    console.log(JSON.stringify({ api: 'successful', status: response.status, readBackVerified: true, id: result.id, emailSent: result.emailSent }));
  }
} catch (error) {
  // Do not print raw database errors: they may contain the connection URI.
  const code = error && typeof error === 'object' && 'code' in error ? error.code : undefined;
  const name = error instanceof Error ? error.name : 'UnknownError';
  console.error(JSON.stringify({ connection: 'failed', errorType: name, code }));
  process.exitCode = 1;
} finally {
  await client?.close();
}
