import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../styles/TextFieldStyle.css';

type CurrencyValueProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const CurrencyValue = ({ handleChange, value }: CurrencyValueProps) => {
  return (
    <Box>
      <TextField
        sx={{ width: '300px' }}
        id='filled-number'
        variant='filled'
        type='number'
        value={value}
        onChange={handleChange}
        onKeyDown={(event: React.KeyboardEvent) => event.code !== 'e'}
      />
    </Box>
  );
};
