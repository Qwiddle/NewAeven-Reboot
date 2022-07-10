import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface HomeState {
  authenticated: boolean;
  accountName: string;
  players: number;
}

const initialState: HomeState = {
  authenticated: false,
  accountName: '',
  players: 0
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    authenticate: (state: any) => {
      state.authenticated = true;
    },
    setAccountName: (state: any, action: PayloadAction<string>) => {
      state.accountName = action.payload;
    },
    setPlayers: (state: any, action: PayloadAction<string>) => {
      state.accountName = action.payload;
    }
  }
});

export const selectAuthenticated = (state: RootState) => state.home.authenticated;
export const selectAccountName = (state: RootState) => state.home.accountName;
export const selectPlayers = (state: RootState) => state.home.players;

export const { authenticate, setAccountName, setPlayers } = homeSlice.actions;
export default homeSlice.reducer;