import React, { useEffect } from 'react';
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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Tooltip from '@mui/material/Tooltip';

export const CurrenciesConvertor = () => {
  const view = useSelector((state: RootState) => state.toggleView.view);

  //Converter view change
  const onHandleChange = () => {
    dispatch(toggleView(!view));
  };

  const dispatch = useDispatch<AppDispatch>();

  //Fetching data from API
  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  return (
    <Box sx={{ px: '30px', mt: '40px' }}>
      <HeaderContainer>
        <ConvertorTitle>Currencies converter</ConvertorTitle>
        <Tooltip title='Change converter view'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: '8px',
            }}
          >
            <Switch onChange={onHandleChange} checked={view ? true : false} />
            <RemoveRedEyeIcon sx={{ width: '30px', height: '30px' }} />
          </Box>
        </Tooltip>
      </HeaderContainer>
      {view ? <SecondConverterView /> : <FirstConteinerView />}
    </Box>
  );
};
