// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import authReducer from '../features/auth/authSlice'; 
import moduleReducer from "../features/modules/moduleSlice";
import languageReducer from "../features/languages/languageSlice"
import { languageApi } from '../services/languageApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer, 
    modules: moduleReducer,
    [languageApi.reducerPath]: languageApi.reducer,
    languages: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(languageApi.middleware),
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
