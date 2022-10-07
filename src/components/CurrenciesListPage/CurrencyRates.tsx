import Box from '@mui/material/Box';
import { CurrencyRatesSelect } from '../CurrenciesListPage/CurrencyRatesSelect';
import { CurrencyRatesContainer } from '../../styles/CurrenciesListPage';

export const CurrencyRates = () => {
  return (
    <CurrencyRatesContainer>
      <Box sx={{ fontSize: '25px', fontWeight: '500' }}>
        Current currency is
      </Box>
      <CurrencyRatesSelect />
    </CurrencyRatesContainer>
  );
};
