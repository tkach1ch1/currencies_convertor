import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type CurrenciesProps = {
  ccy: string; 
  base_ccy: string;
  buy: string;
  sale: string;
}

type ConvertReducerState = {
  currencies: CurrenciesProps[]
}

const initialState:ConvertReducerState = {
  currencies: []
}

const currenciesConverterReducer = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
    });
  },
});

export const fetchAllCurrencies = createAsyncThunk(
  'currencies/fetchAllCurrencies',
  async () => {
    const response = await fetch(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
    );
    return response.json();
  }
);

export default currenciesConverterReducer.reducer;
