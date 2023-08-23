import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action) => {
      const contactDataWithId = { ...action.payload, id: nanoid() };
      state.contacts = [...state.contacts, contactDataWithId];
    },
    filterContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, filterContacts } = contactSlice.actions;

export default contactSlice.reducer;
