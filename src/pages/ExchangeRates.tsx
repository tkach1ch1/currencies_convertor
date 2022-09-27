import React from 'react';
import Box from '@mui/material/Box';
import { ConvertorTitle } from '../styles/CurrenciesConverterPageStyles';
import { CurrencyRates } from '../components/CurrenciesListPage/CurrencyRates';
import { CurrenciesList } from '../components/CurrenciesListPage/CurrenciesList';

export const ExchangeRates = () => {
  return (
    <Box sx={{ px: '30px', mt: '40px' }}>
      <ConvertorTitle>Сurrent exchange rates</ConvertorTitle>
      <CurrencyRates />
      <CurrenciesList />
    </Box>
  );
};
