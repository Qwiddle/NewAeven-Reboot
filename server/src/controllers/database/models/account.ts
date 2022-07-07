import { Schema, model } from 'mongoose';

export interface IAccount {
  account: string,
  password: string,
  email: string,
  ip: string,
  last_online: number,
  active_session_id: string,
  pending_session_id: string,
  pending_session_timestamp: number,
  created: number,
  updated_at: number
}

const accountSchema = new Schema<IAccount>({
  account: String,
  password: String,
  email: String,
  ip: String,
  last_online: Number,
  active_session_id: String,
  pending_session_id: String,
  pending_session_timestamp: Number,
  created: {
    type: Number,
    default: Date.now
  },
  updated_at: {
    type: Number,
    default: Date.now
  }
});

export const Account = model<IAccount>('Account', accountSchema);