import { configureStore } from '@reduxjs/toolkit';
import currenciesConverterReducer from './currenciesConverterReducer';
import convertValuesReducer from './convertValuesReducer';

const store = configureStore({
  reducer: {
    allCurrencies: currenciesConverterReducer,
    convertValues: convertValuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
