import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  ConvertorTitle,
  HeaderContainer,
} from '../styles/SecondConverterViewStyle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencies } from '../redux/fetchedCurrenciesReducer';
import { AppDispatch, RootState } from '../redux/store';
import { SecondConverterView } from '../components/CurrenciesConverterPage/SecondConverterView';
import { FirstConteinerView } from '../components/CurrenciesConverterPage/FirstConverterView';
import Switch from '@mui/material/Switch';
import { toggleView } from '../redux/converterViewReducer';

export const CurrenciesConvertor = () => {
  const view = useSelector((state: RootState) => state.toggleView.view);

  const onHandleChange = () => {
    dispatch(toggleView(!view));
  };

  const dispatch = useDispatch<AppDispatch>();

  //Fetching data from API
  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  return (
    <Box sx={{ px: '30px', mt: '60px' }}>
      <HeaderContainer>
        <ConvertorTitle>Currencies converter</ConvertorTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: '8px',
          }}
        >
          <Box sx={{ fontSize: '20px', fontWeight: '500' }}>Change view</Box>
          <Switch onChange={onHandleChange} checked={view ? true : false} />
        </Box>
      </HeaderContainer>
      {view ? <SecondConverterView /> : <FirstConteinerView />}
    </Box>
  );
};
