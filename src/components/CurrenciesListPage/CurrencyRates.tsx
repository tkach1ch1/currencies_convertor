import Box from '@mui/material/Box';
import { CurrencyRatesSelect } from '../CurrenciesListPage/CurrencyRatesSelect';
import { useCurrentCurrencyContext } from '../../context/CurrentCurrencyContext';
import { CurrencyRatesContainer } from '../../styles/CurrenciesListPage';

export const CurrencyRates = () => {
  const { currentCurrency } = useCurrentCurrencyContext();

  return (
    <CurrencyRatesContainer>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Box sx={{ fontSize: '20px', fontWeight: '500' }}>
          Current currency is
        </Box>
        <Box sx={{ fontSize: '22px', color: '#29ABF8' }}>{currentCurrency}</Box>
      </Box>
      <CurrencyRatesSelect />
    </CurrencyRatesContainer>
  );
};
