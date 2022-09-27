import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../styles/TextFieldStyle.css';

export const CurrencyPrice = () => {
  return (
    <Box>
      <TextField
        sx={{ width: '300px' }}
        id='filled-number'
        defaultValue={0}
        variant='filled'
        type='number'
        onKeyDown={(event: React.KeyboardEvent) => event.code !== 'e'}
      />
    </Box>
  );
};
