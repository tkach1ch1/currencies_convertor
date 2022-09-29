import { createContext, useContext } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

type ContextProps = {
  currentCurrency: string;
  handleChange: (event: SelectChangeEvent) => void;
};

export const CurrentCurrencyContext = createContext<ContextProps>({
  currentCurrency: '',
  handleChange: () => {},
});

export const useCurrentCurrencyContext = () => useContext(CurrentCurrencyContext)
