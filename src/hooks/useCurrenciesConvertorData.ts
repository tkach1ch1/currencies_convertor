import React, { useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  addFirstCurrency,
  addFirstValue,
  addSecondCurrency,
  addSecondValue,
} from '../redux/convertValuesReducer';
import { useDispatch } from 'react-redux';

//NOTE: In this custome hook takes place all field validation on CurrencyConverter page

export const useCurrenciesConvertorData = () => {
  const [firstCurrency, setFirstCurrency] = useState('UAH');
  const [secondCurrency, setSecondCurrency] = useState('UAH');

  const [firstCurrencyValue, setFirstCurrencyValue] = useState('0');
  const [secondCurrencyValue, setSecondCurrencyValue] = useState('0');

  //Currency choose control
  const handleFirstCurrencyChange = (event: SelectChangeEvent) => {
    setFirstCurrency(event.target.value as string);
  };

  const handleSecondCurrencyChange = (event: SelectChangeEvent) => {
    setSecondCurrency(event.target.value as string);
  };

  const handleClick = () => {
    setFirstCurrencyValue('');
  };

  // --- //

  //Currency value control
  const handleFirstCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstCurrencyValue(event.target.value as string);
  };
  const handleSecondCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondCurrencyValue(event.target.value as string);
  };

  // --- //

  const dispatch = useDispatch();

  //Sending all values to redux store
  useEffect(() => {
    dispatch(addFirstCurrency(firstCurrency));
    dispatch(addSecondCurrency(secondCurrency));
    dispatch(addFirstValue(firstCurrencyValue));
    dispatch(addSecondValue(secondCurrencyValue));
  }, [
    dispatch,
    firstCurrency,
    secondCurrency,
    firstCurrencyValue,
    secondCurrencyValue,
  ]);

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
