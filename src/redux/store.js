import { configureStore } from '@reduxjs/toolkit';
import filterSlice from 'redux/filterSlice';

import contactSlice from 'redux/contactSlice';
export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  },
});
