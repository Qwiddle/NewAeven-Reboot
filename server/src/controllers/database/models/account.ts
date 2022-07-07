import { Schema, model } from 'mongoose';

export interface IAccount {
  account: string,
  password: string,
  email: string,
  ip: string,
  lastOnline?: number,
  activeSessionId?: string,
  pendingSessionId?: string,
  pendingSessionTimestamp?: number | null,
  created?: number,
  updated?: number
}

const accountSchema = new Schema<IAccount>({
  account: String,
  password: String,
  email: String,
  ip: String,
  lastOnline: Number,
  activeSessionId: String,
  pendingSessionId: String,
  pendingSessionTimestamp: Number,
  created: {
    type: Number,
    default: Date.now
  },
  updated: {
    type: Number,
    default: Date.now
  }
});

export const Account = model<IAccount>('Account', accountSchema);