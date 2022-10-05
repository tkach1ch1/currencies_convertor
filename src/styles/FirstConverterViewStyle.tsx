import { styled } from '@mui/material';
import { theme } from './theme';
import TextField from '@mui/material/TextField';

export const FirstViewMainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '20px',
  marginTop: '40px',
  marginBottom: '60px',
});

export const FirstViewSelectionContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    gap: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },
});

export const StyledTextField = styled(TextField)({
  width: '150px',
  [theme.breakpoints.down('md')]: {
    width: '200px',
  },
});

export const ResultContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 30px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
    textAlign: 'center',
  },
});
