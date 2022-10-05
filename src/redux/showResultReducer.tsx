import { createSlice } from '@reduxjs/toolkit';

const showResultReducer = createSlice({
  name: 'showResult',
  initialState: {
    result: false,
  },
  reducers: {
    showResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { showResult } = showResultReducer.actions;

export default showResultReducer.reducer;
