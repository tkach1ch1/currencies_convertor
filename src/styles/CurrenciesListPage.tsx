import { styled } from '@mui/material';
import { theme } from './theme';

export const CurrencyRatesContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px', 
    marginBottom: '30px'
  },
});

export const CurrenciesListContainer = styled('div')({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ListItem = styled('div')({
  fontSize: '20px',
  padding: '10px',
});
