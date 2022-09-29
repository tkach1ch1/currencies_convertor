import { styled } from '@mui/material';
import { theme } from './theme';
import TextField from '@mui/material/TextField';

export const FirstViewMainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '40px',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '60px',
  },
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
  padding: '0 30px',
  [theme.breakpoints.down('md')]: {
    padding: '0',
    textAlign: 'center',
  },
});
