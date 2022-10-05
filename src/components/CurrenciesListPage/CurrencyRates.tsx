import Box from '@mui/material/Box';
import { CurrencyRatesSelect } from '../CurrenciesListPage/CurrencyRatesSelect';
import { CurrencyRatesContainer } from '../../styles/CurrenciesListPage';

export const CurrencyRates = () => {

  return (
    <CurrencyRatesContainer>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', mb: '30px' }}>
        <Box sx={{ fontSize: '20px', fontWeight: '500' }}>
          Current currency is
        </Box>
        <CurrencyRatesSelect />
      </Box>
    </CurrencyRatesContainer>
  );
};
