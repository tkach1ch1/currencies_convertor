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

  const { handleChange } = useCurrentCurrencyContext();

  return (
    <FormControl variant='standard' sx={{ width: '250px', mb: '10px' }}>
      <Select
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected) {
            return <em>Choose currency</em>;
          }
        }}
        defaultValue={'UAH'}
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
