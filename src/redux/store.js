import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import filterSlice from 'redux/filterSlice';
import contactSlice from 'redux/contactSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
