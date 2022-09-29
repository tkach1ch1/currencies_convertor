import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const UAHCurrencyList = () => {
  const currencies = useSelector(
    (state: RootState) => state.allCurrencies.currencies
  );

  return (
    <Box>
      {currencies.slice(0, 3).map((elem) => (
        <ListItem key={elem.ccy}>
          1 {elem.ccy} = {elem.buy} {elem.base_ccy}
        </ListItem>
      ))}
      {/* As BTC price is in USD, at first convert BTC price in UAH and then show BTC price in UAH */}
      {currencies.slice(3, 4).map((elem) => (
        <ListItem key={elem.ccy}>
          1 {elem.ccy} = {(Number(elem.buy) * 34).toFixed(2)} UAH
        </ListItem>
      ))}
    </Box>
  );
};
