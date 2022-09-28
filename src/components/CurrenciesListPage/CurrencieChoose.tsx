import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { CurrencySelect } from '../CurrenciesConverterPage/CurrencySelect';
import { SelectChangeEvent } from '@mui/material/Select';

export const CurrencieChoose = () => {
  const [chosenCurrency, setChosenCurrency] = useState('');

  const handleChosenCurrency = (event: SelectChangeEvent) => {
    setChosenCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <CurrencySelect handleChange={handleChosenCurrency} value={chosenCurrency}/>
    </Box>
  );
};
