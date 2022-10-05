import { createSlice } from '@reduxjs/toolkit';

interface convertValuesReducerState {
  firstCurrency: string;
  secondCurrency: string;
  firstValue: string;
  secondValue: string;
  firstViewInput: string;
}

const initialState: convertValuesReducerState = {
  firstCurrency: 'UAH',
  secondCurrency: 'UAH',
  firstValue: '0',
  secondValue: '0',
  firstViewInput: '',
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
    addFirstViewInput: (state, action) => {
      state.firstViewInput = action.payload;
    },
  },
});

export const {
  addFirstCurrency,
  addSecondCurrency,
  addFirstValue,
  addSecondValue,
  addFirstViewInput,
} = convertValuesReducer.actions;

export default convertValuesReducer.reducer;
