import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.mpwutye.mongodb.net/';
const MONGO_DB_NAME = 'FSPT2024';

try {
  await mongoose.connect(MONGO_URL, { dbName: MONGO_DB_NAME, autoIndex: true, });
  console.log('Database connection successfully');
} catch(err) {
  console.error('Error at database connection');
  console.error(err);
}
