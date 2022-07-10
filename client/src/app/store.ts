import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import statusReducer from '../features/game/gameSlice';
import homeReducer from '../features/home/homeSlice';

export const store = configureStore({
  reducer: {
    gameStatus: statusReducer,
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