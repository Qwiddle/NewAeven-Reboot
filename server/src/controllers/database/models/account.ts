import { Schema, model } from 'mongoose';

interface IAccount {
  account: string,
  password: string,
  email: string,
  ip: string,
  last_online: Date,
  active_session_id: string,
  pending_session_id: string,
  pending_session_timestamp: Date,
  created: Date,
  updated_at: Date
}

const accountSchema = new Schema<IAccount>({
  account: String,
  password: String,
  email: String,
  ip: String,
  last_online: Date,
  active_session_id: String,
  pending_session_id: String,
  pending_session_timestamp: Date,
  created: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

export const Account = model<IAccount>('Account', accountSchema);