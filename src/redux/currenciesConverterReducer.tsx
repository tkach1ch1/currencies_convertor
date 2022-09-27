import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const currenciesConverterReducer = createSlice({
  name: 'currencies',
  initialState: {
    currencies: '',
  },
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
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    );
    return response.json();
  }
);

export default currenciesConverterReducer.reducer;
