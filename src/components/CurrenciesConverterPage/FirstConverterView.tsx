import Box from '@mui/material/Box';
import { useConvert } from '../../hooks/useConvert';
import {
  FirstViewMainContainer,
  ResultContainer,
} from '../../styles/FirstConverterViewStyle';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useFirstViewCurreciesConvertorData } from '../../hooks/useFirstViewCurreciesConvertorData';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const FirstConteinerView = () => {
  const firstCurrency = useSelector(
    (state: RootState) => state.convertValues.firstCurrency
  );
  const secondCurrency = useSelector(
    (state: RootState) => state.convertValues.secondCurrency
  );
  const firstStringValue = useSelector(
    (state: RootState) => state.convertValues.firstValue
  );
  const input = useSelector(
    (state: RootState) => state.convertValues.firstViewInput
  );

  //Taking data from custom hook
  const { handleInputChange, handleConvertButtonClick, result } =
    useFirstViewCurreciesConvertorData();

  //Taking converted value from custome hook
  const { convertedValue } = useConvert();

  let convertedStrValue =
    convertedValue === 0
      ? String(convertedValue.toFixed(0))
      : String(convertedValue.toFixed(2));

  return (
    <Box>
      <FirstViewMainContainer>
        <Input
          placeholder='Convert here'
          fullWidth={true}
          value={input}
          sx={{ maxWidth: '400px', textAlign: 'center' }}
          onChange={handleInputChange}
        />
        <Box sx={{ fontWeight: '500', color: 'rgb(0, 111, 232)' }}>
          Example: 1 USD in UAH
        </Box>
      </FirstViewMainContainer>

      <ResultContainer>
        {result ? (
          <Box>
            <Box
              sx={{
                color: 'rgb(92, 102, 123)',
                fontSize: '20px',
                fontWeight: '500',
                pb: '10px',
              }}
            >
              {firstStringValue === '' ? 0 : firstStringValue} {firstCurrency} ={' '}
            </Box>
            <Box
              sx={{
                color: 'rgb(46, 60, 87)',
                fontSize: '25px',
                fontWeight: '500',
              }}
            >
              {convertedStrValue} {secondCurrency}
            </Box>
          </Box>
        ) : (
          <Box></Box>
        )}
        <Button
          variant='contained'
          onClick={handleConvertButtonClick}
          sx={{ px: '40px', py: '10px' }}
        >
          Convert
        </Button>
      </ResultContainer>
    </Box>
  );
};
