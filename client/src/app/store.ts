import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from '../slices/game';
import homeReducer from '../slices/home';

export const store = configureStore({
  reducer: {
    game: gameReducer,
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