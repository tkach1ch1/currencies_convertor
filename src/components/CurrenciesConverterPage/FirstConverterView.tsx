import { useCurrenciesConvertorData } from '../../hooks/useCurrenciesConvertorData';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CurrencySelect } from './CurrencySelect';
import { useConvert } from '../../hooks/useConvert';
import {
  FirstViewMainContainer,
  FirstViewSelectionContainer,
  ResultContainer,
  StyledTextField,
} from '../../styles/FirstConverterViewStyle';

export const FirstConteinerView = () => {
  //Taking data from custom hook
  const {
    firstCurrency,
    secondCurrency,
    firstCurrencyValue,
    handleFirstCurrencyChange,
    handleSecondCurrencyChange,
    handleFirstCurrencyValue,
    handleSecondCurrencyValue,
    handleClick,
  } = useCurrenciesConvertorData();

  //Taking converted value from custome hook
  const { convertedValue } = useConvert();

  let convertedStrValue =
    convertedValue === 0
      ? String(convertedValue.toFixed(0))
      : String(convertedValue.toFixed(2));

  return (
    <Box>
      <FirstViewMainContainer>
        <StyledTextField
          id='standard-number'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          variant='standard'
          value={firstCurrencyValue}
          onChange={handleFirstCurrencyValue}
          onClick={handleClick}
        />
        <FirstViewSelectionContainer>
          <CurrencySelect
            value={firstCurrency}
            handleChange={handleFirstCurrencyChange}
            width={'150px'}
          />
          <Box sx={{ fontSize: '30px' }}>in</Box>

          <CurrencySelect
            value={secondCurrency}
            handleChange={handleSecondCurrencyChange}
            width={'150px'}
          />
        </FirstViewSelectionContainer>
      </FirstViewMainContainer>
      <ResultContainer>
        <Box
          sx={{
            color: 'rgb(92, 102, 123)',
            fontSize: '20px',
            fontWeight: '500',
            pb: '10px',
          }}
        >
          {firstCurrencyValue === '' ? 0 : firstCurrencyValue} {firstCurrency} ={' '}
        </Box>
        <Box
          sx={{ color: 'rgb(46, 60, 87)', fontSize: '25px', fontWeight: '500' }}
        >
          {convertedStrValue} {secondCurrency}
        </Box>
      </ResultContainer>
    </Box>
  );
};
