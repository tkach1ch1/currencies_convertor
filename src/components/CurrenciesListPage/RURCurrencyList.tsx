import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const RURCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 RUR = {rurPrice.toFixed(2)} UAH</ListItem>
      <ListItem>1 RUR = {(rurPrice / usdPrice).toFixed(4)} USD</ListItem>
      <ListItem>1 RUR = {(rurPrice / eurPrice).toFixed(4)} EUR</ListItem>
      <ListItem>1 RUR = {(rurPrice / btcPrice).toFixed(5)} BTC</ListItem>
    </Box>
  );
};