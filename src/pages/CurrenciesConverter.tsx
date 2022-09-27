import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import { CurrencySelect } from '../components/CurrenciesConverterPage/CurrencySelect';
import { CurrencyPrice } from '../components/CurrenciesConverterPage/CurrencyPrice';
import { ChangeArrow } from '../components/CurrenciesConverterPage/ChangeArrow';
import '../styles/AnimationEffect.css';
import {
  ConvertorTitle,
  MainContainer,
  SelectionContainer,
} from '../styles/CurrenciesConverterPageStyles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencies } from '../redux/currenciesConverterReducer';

export const CurrenciesConvertor = () => {
  const currencies = useSelector((state) => state.allCurrencies.currencies);

  const dispatch = useDispatch();
  console.log(currencies);

  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  return (
    <Box sx={{ px: '30px', mt: '40px' }}>
      <ConvertorTitle>Currencies converter</ConvertorTitle>
      <MainContainer>
        <SelectionContainer>
          <CurrencySelect />
          <CurrencyPrice />
        </SelectionContainer>

        <ChangeArrow />

        <SelectionContainer>
          <CurrencySelect />
          <CurrencyPrice />
        </SelectionContainer>
      </MainContainer>
    </Box>
  );
};
