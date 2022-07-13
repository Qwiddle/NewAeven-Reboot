import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIUpdate } from '../app/events';
import { RootState } from '../app/store';

export interface GameState {
  status: 'boot' | 'home' | 'play';
  uiUpdates: UIUpdate[]
}

const initialState: GameState = {
  status: 'home',
  uiUpdates: []
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setStatus: (state: any, action: PayloadAction<string>) => {
      state.status = action.payload;
    }
  }
});

export const selectStatus = (state: RootState) => {
  return state.game.status;
}

export const { setStatus } = gameSlice.actions;
export default gameSlice.reducer;