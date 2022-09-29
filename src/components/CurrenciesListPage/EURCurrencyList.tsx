import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const EURCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 EUR = {eurPrice.toFixed(2)} UAH</ListItem>
      <ListItem>1 EUR = {(eurPrice / usdPrice).toFixed(3)} USD</ListItem>
      <ListItem>1 EUR = {(eurPrice / rurPrice).toFixed(2)} RUR</ListItem>
      <ListItem>1 EUR = {(eurPrice / btcPrice).toFixed(5)} BTC</ListItem>
    </Box>
  );
};
