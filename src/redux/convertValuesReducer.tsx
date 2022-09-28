import { createSlice } from '@reduxjs/toolkit';

interface convertValuesReducerState {
  firstCurrency: string;
  secondCurrency: string;
  firstValue: string;
  secondValue: string;
}

const initialState: convertValuesReducerState = {
  firstCurrency: '',
  secondCurrency: '',
  firstValue: '',
  secondValue: '',
};

const convertValuesReducer = createSlice({
  name: 'convert',
  initialState,
  reducers: {
    addFirstCurrency: (state, action) => {
      state.firstCurrency = action.payload;
    },
    addSecondCurrency: (state, action) => {
      state.secondCurrency = action.payload;
    },
    addFirstValue: (state, action) => {
      state.firstValue = action.payload;
    },
    addSecondValue: (state, action) => {
      state.secondValue = action.payload;
    },
  },
});

export const {
  addFirstCurrency,
  addSecondCurrency,
  addFirstValue,
  addSecondValue,
} = convertValuesReducer.actions;

export default convertValuesReducer.reducer;
