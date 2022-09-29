import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const BTCCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 UAH = {(1 / (btcPrice * usdPrice)).toFixed(10)} BTC</ListItem>
      <ListItem>1 USD = {(1 / btcPrice).toFixed(10)} BTC</ListItem>
      <ListItem>
        1 EUR = {(eurPrice / (btcPrice * usdPrice)).toFixed(10)} BTC
      </ListItem>
      <ListItem>
        1 RUR = {(rurPrice / (btcPrice * usdPrice) ).toFixed(10)} BTC
      </ListItem>
    </Box>
  );
};
