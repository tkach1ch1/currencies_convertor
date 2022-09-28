import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencies } from '../redux/currenciesConverterReducer';

import { useCurrenciesConvertorData } from '../hooks/useCurrenciesConvertorData';
import { RootState } from '../redux/store';

export const CurrenciesConvertor = () => {
  //Taking data from custom hook
  const {
    firstCurrency,
    secondCurrency,
    firstCurrencyValue,
    secondCurrencyValue,
    handleFirstCurrencyChange,
    handleSecondCurrencyChange,
    handleFirstCurrencyValue,
    handleSecondCurrencyValue,
  } = useCurrenciesConvertorData();

  const dispatch = useDispatch();

  //Fetching data from API
  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

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
            value={secondCurrencyValue}
          />
        </SelectionContainer>
      </MainContainer>
    </Box>
  );
};
