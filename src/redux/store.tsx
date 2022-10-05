import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fetchedCurrenciesReducer from './fetchedCurrenciesReducer';
import convertValuesReducer from './convertValuesReducer';
import exchangeRatesReducer from './exchangeRatesReducer';
import converterViewReducer from './converterViewReducer';
import showResultReducer from './showResultReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  allCurrencies: fetchedCurrenciesReducer,
  convertValues: convertValuesReducer,
  exchangeRates: exchangeRatesReducer,
  toggleView: converterViewReducer,
  showResult: showResultReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['convertValues', 'exchangeRates', 'toggleView', 'showResult'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
