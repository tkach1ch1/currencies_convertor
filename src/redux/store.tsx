import { configureStore } from '@reduxjs/toolkit';
import fetchedCurrenciesReducer from './fetchedCurrenciesReducer';
import convertValuesReducer from './convertValuesReducer';

const store = configureStore({
  reducer: {
    allCurrencies: fetchedCurrenciesReducer,
    convertValues: convertValuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;
