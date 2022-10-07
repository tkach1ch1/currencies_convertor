import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { ConvertorTitle } from '../styles/SecondConverterViewStyle';
import { CurrencyRates } from '../components/CurrenciesListPage/CurrencyRates';
import { CurrenciesList } from '../components/CurrenciesListPage/CurrenciesList';
import { SelectChangeEvent } from '@mui/material/Select';
import { CurrentCurrencyContext } from '../context/CurrentCurrencyContext';
import { fetchAllCurrencies } from '../redux/fetchedCurrenciesReducer';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentCurrency } from '../redux/exchangeRatesReducer';

export const ExchangeRates = () => {
  const currentCurrency = useSelector(
    (state: RootState) => state.exchangeRates.currentCurrency
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(addCurrentCurrency(event.target.value));
  };

  const dispatch = useDispatch<AppDispatch>();

  //Fetching data from API
  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  return (
    <CurrentCurrencyContext.Provider value={{ currentCurrency, handleChange }}>
      <Box sx={{ px: '30px', mt: '40px' }}>
        <ConvertorTitle>Сurrent exchange rates</ConvertorTitle>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <CurrencyRates />
          <CurrenciesList />
        </Box>
      </Box>
    </CurrentCurrencyContext.Provider>
  );
};
