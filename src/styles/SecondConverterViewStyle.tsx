import { styled } from '@mui/material';
import { theme } from './theme';

export const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '70px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginBottom: '20px'
  },
});

export const ConvertorTitle = styled('div')({
  fontSize: '40px',
  fontWeight: '700',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '35px',
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '30px',
  },
});

export const MainContainer = styled('div')({
  px: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '20px',
  },
});

export const SecondViewSelectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
});
