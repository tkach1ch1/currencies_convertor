import React from 'react';
import Box from '@mui/material/Box';
import { CurrencySelect } from '../CurrenciesConverterPage/CurrencySelect';

export const CurrencieChoose = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <CurrencySelect />
    </Box>
  );
};
