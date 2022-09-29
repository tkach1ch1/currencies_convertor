import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const BTCCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 BTC = {(btcPrice * usdPrice).toFixed(2)} UAH</ListItem>
      <ListItem>1 BTC = {btcPrice.toFixed(2)} USD</ListItem>
      <ListItem>
        1 BTC = {((btcPrice * usdPrice) / eurPrice).toFixed(2)} EUR
      </ListItem>
      <ListItem>1 BTC = {((btcPrice * usdPrice) / rurPrice).toFixed(2)} RUR</ListItem>
    </Box>
  );
};
