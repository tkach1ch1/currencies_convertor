import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const RURCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 UAH = {(1 / rurPrice).toFixed(2)} RUR</ListItem>
      <ListItem>1 USD = {(usdPrice / rurPrice).toFixed(4)} RUR</ListItem>
      <ListItem>1 EUR = {(eurPrice / rurPrice).toFixed(4)} RUR</ListItem>
      <ListItem>
        1 BTC = {((btcPrice * usdPrice) / rurPrice).toFixed(2)} RUR
      </ListItem>
    </Box>
  );
};
