import { styled } from '@mui/material';
import { theme } from './theme';

export const ConvertorTitle = styled('h1')({
  fontSize: '40px',
  fontWeight: '700',
  mb: '30px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '35px'
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '30px'
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

export const SelectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
});
