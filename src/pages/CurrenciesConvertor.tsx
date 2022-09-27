import React from 'react';
import Box from '@mui/material/Box';
import { CurrencySelect } from '../components/CurrenciesConvertorPage/CurrencySelect';
import { CurrencyPrice } from '../components/CurrenciesConvertorPage/CurrencyPrice';
import { ChangeArrow } from '../components/CurrenciesConvertorPage/ChangeArrow';
import '../styles/AnimationEffect.css';
import {
  ConvertorTitle,
  MainContainer,
  SelectionContainer,
} from '../styles/CurrenciesConvertorPageStyles';

export const CurrenciesConvertor = () => {
  return (
    <Box sx={{ px: '30px', mt: '40px' }}>
      <ConvertorTitle>
        Currencies convertor
      </ConvertorTitle>
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
