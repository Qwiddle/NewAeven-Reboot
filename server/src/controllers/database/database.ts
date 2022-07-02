import mongoose from 'mongoose';
import 'dotenv/config.js';

export function databaseConnect(host?: string, database?: string) {
  return mongoose.connect(`mongodb://${process.env.DBHOST || host}/${process.env.DB || database}`);
}