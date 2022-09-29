import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../../styles/SelectButtonStyle.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type CurrencySelectProps = {
  handleChange: (event: SelectChangeEvent) => void;
  value: string;
  width?: string;
};
export const CurrencySelect = ({
  handleChange,
  value,
  width
}: CurrencySelectProps) => {
  const currencies = useSelector(
    (state: RootState) => state.allCurrencies.currencies
  );

  return (
    <Box>
      <FormControl sx={{ width: width }}>
        <Select value={value} onChange={handleChange} displayEmpty>
          <MenuItem value={'UAH'}>UAH</MenuItem>
          {!!currencies &&
            currencies.map((elem) => (
              <MenuItem value={String(elem.ccy)} key={elem.ccy}>
                {elem.ccy}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};
