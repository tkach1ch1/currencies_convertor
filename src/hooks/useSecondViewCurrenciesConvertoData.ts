import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  addFirstCurrency,
  addFirstValue,
  addSecondCurrency,
  addSecondValue,
} from '../redux/convertValuesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

//NOTE: In this custome hook takes place all field validation on CurrencyConverter page

export const useSecondViewCurrenciesConvertorData = () => {
  let firstCurrency = useSelector(
    (state: RootState) => state.convertValues.firstCurrency
  );
  let secondCurrency = useSelector(
    (state: RootState) => state.convertValues.secondCurrency
  );
  let firstCurrencyValue = useSelector(
    (state: RootState) => state.convertValues.firstValue
  );
  let secondCurrencyValue = useSelector(
    (state: RootState) => state.convertValues.secondValue
  );

  const dispatch = useDispatch();

  //Currency choose control
  const handleFirstCurrencyChange = (event: SelectChangeEvent) => {
    dispatch(addFirstCurrency(event.target.value));
  };

  const handleSecondCurrencyChange = (event: SelectChangeEvent) => {
    dispatch(addSecondCurrency(event.target.value));
  };

  // --- //

  //Currency value control
  const handleFirstCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === '') {
      dispatch(addFirstValue('0'));
    } else dispatch(addFirstValue(event.target.value as string));
    
  };
  const handleSecondCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(addSecondValue(event.target.value as string));
  };

  const handleClick = () => {
    if (firstCurrencyValue === '0') dispatch(addFirstValue(''));
  };

  // --- //

  return {
    firstCurrency,
    secondCurrency,
    firstCurrencyValue,
    secondCurrencyValue,
    handleFirstCurrencyChange,
    handleSecondCurrencyChange,
    handleFirstCurrencyValue,
    handleSecondCurrencyValue,
    handleClick,
  };
};
