import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { ConvertorTitle } from '../styles/CurrenciesConverterPageStyles';
import { CurrencyRates } from '../components/CurrenciesListPage/CurrencyRates';
import { CurrenciesList } from '../components/CurrenciesListPage/CurrenciesList';
import { SelectChangeEvent } from '@mui/material/Select';
import { CurrentCurrencyContext } from '../context/CurrentCurrencyContext';
import { fetchAllCurrencies } from '../redux/fetchedCurrenciesReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';


export const ExchangeRates = () => {
  const [currentCurrency, setCurrentCurrency] = useState('UAH');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentCurrency(event.target.value);
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
        <CurrencyRates />
        <CurrenciesList />
      </Box>
    </CurrentCurrencyContext.Provider>
  );
};
