import { createSlice } from '@reduxjs/toolkit';

const convertValuesReducer = createSlice({
  name: 'exchange',
  initialState: {
    currentCurrency: 'UAH',
  },
  reducers: {
    addCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { addCurrentCurrency } = convertValuesReducer.actions;

export default convertValuesReducer.reducer;
