import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFirstCurrency,
  addFirstValue,
  addFirstViewInput,
  addSecondCurrency,
} from '../redux/convertValuesReducer';
import { showResult } from '../redux/showResultReducer';
import { RootState } from '../redux/store';

export const useFirstViewCurreciesConvertorData = () => {
  const [inputError, setInputError] = useState(false);

  const input = useSelector(
    (state: RootState) => state.convertValues.firstViewInput
  );

  const result = useSelector((state: RootState) => state.showResult.result);

  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addFirstViewInput(event.target.value as string));
  };

  const inputArray = input && input.trim().split(' ');

  let firstCurrencyValue = inputArray[0] && inputArray[0];
  let firstCurrency = inputArray[1] && inputArray[1].toUpperCase();
  let secondCurrency = inputArray[3] && inputArray[3].toUpperCase();

  const handleConvertButtonClick = () => {
    setInputError(false);
    if (inputArray.length === 4 && !isNaN(Number(firstCurrencyValue))) {
      dispatch(addFirstValue(firstCurrencyValue));
      dispatch(addFirstCurrency(firstCurrency));
      dispatch(addSecondCurrency(secondCurrency));
      dispatch(showResult(true));
    } else if (inputArray.length > 4 || isNaN(Number(firstCurrencyValue))) {
      setInputError(true);
    }
  };

  return {
    handleInputChange,
    handleConvertButtonClick,
    result,
    inputError,
  };
};
