import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const USDCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 USD = {usdPrice.toFixed(2)} UAH</ListItem>
      <ListItem>1 USD = {(usdPrice / eurPrice).toFixed(3)} EUR</ListItem>
      <ListItem>1 USD = {(usdPrice / rurPrice).toFixed(2)} RUR</ListItem>
      <ListItem>1 USD = {(usdPrice / btcPrice).toFixed(5)} BTC</ListItem>
    </Box>
  );
};
