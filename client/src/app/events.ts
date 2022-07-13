export type UIUpdate = {
  type: UserEvent,
  payload?: any
};

export type UserEvent = 
'account_login' |
'account_register';

export const ACCOUNT_LOGIN: UserEvent = 'account_login';
export const ACCOUNT_REGISTER: UserEvent = 'account_register';