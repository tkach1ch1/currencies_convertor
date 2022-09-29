import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../styles/TextFieldStyle.css';

type CurrencyValueProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
  value: string;
  readOnly: boolean;
};

export const CurrencyValue = ({
  handleChange,
  handleClick,
  value,
  readOnly,
}: CurrencyValueProps) => {
  return (
    <Box>
      <TextField
        sx={{ width: '300px' }}
        id='filled-number'
        variant='filled'
        type='number'
        inputProps={{
          readOnly: readOnly,
        }}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
    </Box>
  );
};
