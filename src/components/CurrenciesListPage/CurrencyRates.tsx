import React from 'react';
import Box from '@mui/material/Box';
import { CurrencyRatesSelect } from '../CurrenciesListPage/CurrencyRatesSelect';

export const CurrencyRates = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: '50px'
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Box sx={{ fontSize: '18px', fontWeight: '500' }}>
          Current currency is
        </Box>
        <Box sx={{ fontSize: '22px', color: '#29ABF8' }}>UAH</Box>
      </Box>
      <CurrencyRatesSelect />
      
    </Box>
  );
};
