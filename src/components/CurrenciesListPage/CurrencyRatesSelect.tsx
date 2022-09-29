import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useCurrentCurrencyContext } from '../../context/CurrentCurrencyContext';

export const CurrencyRatesSelect = () => {
  const currencies = useSelector(
    (state: RootState) => state.allCurrencies.currencies
  );

  const { currentCurrency, handleChange } = useCurrentCurrencyContext();

  return (
    <FormControl variant='standard' sx={{ width: '250px', mb: '20px' }}>
      <InputLabel id='demo-simple-select-standard-label'>
        Choose currency
      </InputLabel>
      <Select
        labelId='demo-simple-select-standard-label'
        id='demo-simple-select-standard'
        value={currentCurrency}
        onChange={handleChange}
        label='Choose currency'
      >
        <MenuItem value={'UAH'}>UAH</MenuItem>
        {!!currencies &&
          currencies.map((elem) => (
            <MenuItem value={elem.ccy} key={elem.ccy}>
              {elem.ccy}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
