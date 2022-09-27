import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const CurrencyRatesSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant='standard' sx={{ width: '250px' }}>
      <InputLabel id='demo-simple-select-standard-label'>Choose currency</InputLabel>
      <Select
        labelId='demo-simple-select-standard-label'
        id='demo-simple-select-standard'
        value={age}
        onChange={handleChange}
        label='Choose currency'
      >
        <MenuItem value={5}>
          UAH
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
