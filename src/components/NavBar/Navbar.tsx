import Box from '@mui/material/Box';
import { Categorie } from './Categorie';
import coin_exchange from '../../img/coin_exchange.svg';
import compare from '../../img/compare.svg';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Categorie link={'/'}>
        <Box sx={{ width: '25px', height: '25px' }}>
          <CurrencyExchangeIcon />
        </Box>
        <div>Convert</div>
      </Categorie>
      <Categorie link={'currencies'}>
        <Box sx={{ width: '25px', height: '25px' }}>
          <PriceChangeIcon />
        </Box>
        <div>Currencies</div>
      </Categorie>
    </Box>
  );
};
