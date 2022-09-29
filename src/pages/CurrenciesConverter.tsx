import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { CurrencySelect } from '../components/CurrenciesConverterPage/CurrencySelect';
import { CurrencyValue } from '../components/CurrenciesConverterPage/CurrencyValue';
import { ChangeArrow } from '../components/CurrenciesConverterPage/ChangeArrow';
import '../styles/AnimationEffect.css';
import {
  ConvertorTitle,
  MainContainer,
  SelectionContainer,
} from '../styles/CurrenciesConverterPageStyles';
import { useDispatch } from 'react-redux';
import { fetchAllCurrencies } from '../redux/fetchedCurrenciesReducer';

import { useCurrenciesConvertorData } from '../hooks/useCurrenciesConvertorData';
import { useConvert } from '../hooks/useConvert';

export const CurrenciesConvertor = () => {
  const dispatch = useDispatch();

  //Fetching data from API
  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

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
    <Box sx={{ px: '30px', mt: '40px' }}>
      <ConvertorTitle>Currencies converter</ConvertorTitle>
      <MainContainer>
        <SelectionContainer>
          <CurrencySelect
            handleChange={handleFirstCurrencyChange}
            value={firstCurrency}
          />
          <CurrencyValue
            handleChange={handleFirstCurrencyValue}
            value={firstCurrencyValue}
            handleClick={handleClick}
            readOnly={false}
          />
        </SelectionContainer>

        <ChangeArrow />

        <SelectionContainer>
          <CurrencySelect
            handleChange={handleSecondCurrencyChange}
            value={secondCurrency}
          />
          <CurrencyValue
            handleChange={handleSecondCurrencyValue}
            value={convertedStrValue}
            readOnly={true}
          />
        </SelectionContainer>
      </MainContainer>
    </Box>
  );
};
