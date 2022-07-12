import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameStatusReducer from '../components/game/gameSlice';
import homeReducer from '../components/home/homeSlice';

export const store = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
    home: homeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;