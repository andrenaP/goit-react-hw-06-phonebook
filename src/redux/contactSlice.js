import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action) => {
      const contactDataWithId = { ...action.payload, id: nanoid() };
      state.items = [...state.items, contactDataWithId];
    },
    filterContacts: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { add, filterContacts } = contactSlice.actions;
export default persistedReducer;
export const getContactsItems = state => state.contacts.items;
