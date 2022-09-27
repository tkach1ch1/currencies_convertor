import { configureStore } from '@reduxjs/toolkit';
import currenciesConverterReducer from './currenciesConverterReducer';

const store = configureStore({
    reducer: {
        allCurrencies: currenciesConverterReducer
    }
});

export default store;
