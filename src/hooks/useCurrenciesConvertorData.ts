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

export const useCurrenciesConvertorData = () => {
  const firstCurrency = useSelector(
    (state: RootState) => state.convertValues.firstCurrency
  );
  const secondCurrency = useSelector(
    (state: RootState) => state.convertValues.secondCurrency
  );
  const firstCurrencyValue = useSelector(
    (state: RootState) => state.convertValues.firstValue
  );
  const secondCurrencyValue = useSelector(
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

  const handleClick = () => {
    dispatch(addFirstValue(''));
  };

  // --- //

  //Currency value control
  const handleFirstCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(addFirstValue(event.target.value as string));
  };
  const handleSecondCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(addSecondValue(event.target.value as string));
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
