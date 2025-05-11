import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // Otros reducers de tu aplicación
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;