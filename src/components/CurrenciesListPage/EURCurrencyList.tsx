import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const EURCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 UAH = {(1 / eurPrice).toFixed(4)} EUR</ListItem>
      <ListItem>1 USD = {(usdPrice / eurPrice).toFixed(3)} EUR</ListItem>
      <ListItem>1 RUR = {(rurPrice / eurPrice).toFixed(2)} EUR</ListItem>
      <ListItem>1 BTC = {((btcPrice * usdPrice) / eurPrice).toFixed(2)} EUR</ListItem>
    </Box>
  );
};
