import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useCurrentCurrencyContext } from '../../context/CurrentCurrencyContext';
import '../../styles/SelectButtonStyle.css'
export const CurrencyRatesSelect = () => {
  const currencies = useSelector(
    (state: RootState) => state.allCurrencies.currencies
  );

  const { currentCurrency } = useCurrentCurrencyContext();

  const { handleChange } = useCurrentCurrencyContext();

  return (
    <FormControl variant='standard' sx={{ width: '80px', pt: '5px' }}>
      <Select
        onChange={handleChange}
        value={currentCurrency}
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
