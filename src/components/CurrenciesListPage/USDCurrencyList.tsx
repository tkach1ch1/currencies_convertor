import Box from '@mui/material/Box';
import { ListItem } from '../../styles/CurrenciesListPage';
import { useConvert } from '../../hooks/useConvert';

export const USDCurrencyList = () => {
  const { eurPrice, usdPrice, rurPrice, btcPrice } = useConvert();

  return (
    <Box>
      <ListItem>1 UAH = {(1 / usdPrice).toFixed(4)} USD</ListItem>
      <ListItem>1 EUR = {(eurPrice / usdPrice).toFixed(3)} USD</ListItem>
      <ListItem>1 RUR = {(rurPrice / usdPrice).toFixed(5)} USD</ListItem>
      <ListItem>1 BTC = {btcPrice.toFixed(2)} USD</ListItem>
    </Box>
  );
};
