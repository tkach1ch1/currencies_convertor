import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../styles/AnimationEffect.css';
import {
  ConvertorTitle,
  HeaderContainer,
} from '../styles/SecondConverterViewStyle';
import { useDispatch } from 'react-redux';
import { fetchAllCurrencies } from '../redux/fetchedCurrenciesReducer';
import { AppDispatch } from '../redux/store';
import { SecondConverterView } from '../components/CurrenciesConverterPage/SecondConverterView';
import { FirstConteinerView } from '../components/CurrenciesConverterPage/FirstConverterView';
import Switch from '@mui/material/Switch';

export const CurrenciesConvertor = () => {
  const [toggleView, settoggleView] = useState(false);

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
          <Switch onChange={() => settoggleView(!toggleView)} />
        </Box>
      </HeaderContainer>
      {toggleView ? <SecondConverterView /> : <FirstConteinerView />}
    </Box>
  );
};
