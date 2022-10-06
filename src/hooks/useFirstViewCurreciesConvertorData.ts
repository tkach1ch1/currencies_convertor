import React from 'react';
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
  const input = useSelector(
    (state: RootState) => state.convertValues.firstViewInput
  );

  const result = useSelector((state: RootState) => state.showResult.result);

  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addFirstViewInput(event.target.value as string));
  };

  const inputArray = input && input.split(' ');

  let firstCurrencyValue = inputArray[0] && inputArray[0];
  let firstCurrency = inputArray[1] && inputArray[1].toUpperCase();
  let secondCurrency = inputArray[3] && inputArray[3].toUpperCase();

  const handleConvertButtonClick = () => {
    if (inputArray.length === 4) {
      dispatch(addFirstValue(firstCurrencyValue));
      dispatch(addFirstCurrency(firstCurrency));
      dispatch(addSecondCurrency(secondCurrency));
      dispatch(showResult(true));
    }
  };

  return {
    handleInputChange,
    handleConvertButtonClick,
    result,
    inputArray,
  };
};
