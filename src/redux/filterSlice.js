import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtering: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filtering } = filterSlice.actions;

export default filterSlice.reducer;
