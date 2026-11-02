import { MongoClient } from 'mongodb';

const cache = globalThis as typeof globalThis & {
  nuotechMongo?: { uri: string; promise: Promise<MongoClient> };
};

export function getMongoConfig() {
  const uri = process.env.MONGODB_URI || process.env.MONDO_DB_URI;
  if (!uri) throw new Error('MongoDB is not configured.');
  const uriDatabase = uri.match(/^mongodb(?:\+srv)?:\/\/[^/]+\/([^?]+)/)?.[1];
  const database = process.env.MONGODB_DB || (uriDatabase ? decodeURIComponent(uriDatabase) : 'nuotech');
  return { uri, database };
}

export async function getDatabase() {
  const { uri, database } = getMongoConfig();
  if (!cache.nuotechMongo || cache.nuotechMongo.uri !== uri) {
    const client = new MongoClient(uri, {
      maxPoolSize: 10, serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000, socketTimeoutMS: 15000,
    });
    const promise = client.connect().catch(async error => {
      if (cache.nuotechMongo?.promise === promise) delete cache.nuotechMongo;
      await client.close().catch(() => {});
      throw error;
    });
    cache.nuotechMongo = { uri, promise };
  }
  return (await cache.nuotechMongo.promise).db(database);
}
