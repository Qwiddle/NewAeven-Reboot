import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface GameState {
  status: 'boot' | 'home' | 'play';
}

const initialState: GameState = {
  status: 'boot'
};

export const gameSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state: any, action: PayloadAction<string>) => {
      state.status = action.payload;
    }
  }
});

export const selectStatus = (state: RootState) => state.gameStatus.status;

export const { setStatus } = gameSlice.actions;
export default gameSlice.reducer;