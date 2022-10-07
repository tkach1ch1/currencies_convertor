import { styled } from '@mui/material';
import { theme } from './theme';

export const CurrencyRatesContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  marginTop: '20px',
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px'
  },
});

export const CurrenciesListContainer = styled('div')({
  width: '400px',
  display: 'flex',
  paddingLeft: '55px',
  lineHeight: '2',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ListItem = styled('div')({
  fontSize: '20px',
  padding: '10px',
});
