import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

//NOTE: In this custome hook takes plase a functional part of currencies convertation

export const useConvert = () => {
  const currencies = useSelector(
    (state: RootState) => state.allCurrencies.currencies
  );

  //NOTE: Taking all data from convertValuesReducer in redux
  const firstCurrency = useSelector(
    (state: RootState) => state.convertValues.firstCurrency
  );
  const secondCurrency = useSelector(
    (state: RootState) => state.convertValues.secondCurrency
  );
  const firstStringValue = useSelector(
    (state: RootState) => state.convertValues.firstValue
  );

  //Received value in string converting to number
  let firstValue = Number(firstStringValue);

  // NOTE: Taking certain currency price in UAH (for example 1EUR = 30UAH) in order to convert it farther + converting value to number
  // Since in API there is no ratio of all currencies to each other, firstly we take all prices in UAH and then convert them into other currencies

  const eurPrice =
    currencies && Number(currencies.find((elem) => elem.ccy === 'EUR')?.buy);
  const usdPrice =
    currencies && Number(currencies.find((elem) => elem.ccy === 'USD')?.buy);
  const rurPrice =
    currencies && Number(currencies.find((elem) => elem.ccy === 'RUR')?.buy);
  const btcPrice =
    currencies && Number(currencies.find((elem) => elem.ccy === 'BTC')?.buy);

  const convertedValue =
    // -- //
    firstCurrency === 'UAH' && secondCurrency === 'UAH' //UAH > UAH
      ? firstValue
      : firstCurrency === 'EUR' && secondCurrency === 'EUR' //EUR > EUR
      ? firstValue
      : firstCurrency === 'USD' && secondCurrency === 'USD' //USD > USD
      ? firstValue
      : firstCurrency === 'RUR' && secondCurrency === 'RUR' //RUR > RUR
      ? firstValue
      : firstCurrency === 'BTC' && secondCurrency === 'BTC' //BTC > BTC
      ? firstValue
      : // UAH >
      firstCurrency === 'UAH' && secondCurrency === 'EUR' //UAH > EUR
      ? firstValue / eurPrice
      : firstCurrency === 'UAH' && secondCurrency === 'RUR' //UAH > RUR
      ? firstValue / rurPrice
      : firstCurrency === 'UAH' && secondCurrency === 'USD' //UAH > USD
      ? firstValue / usdPrice
      : firstCurrency === 'UAH' && secondCurrency === 'BTC' //UAH > BTC
      ? firstValue / (btcPrice * usdPrice)
      : //EUR >
      firstCurrency === 'EUR' && secondCurrency === 'UAH' //EUR > UAH
      ? firstValue * eurPrice
      : firstCurrency === 'EUR' && secondCurrency === 'USD' //EUR > USD
      ? (firstValue * eurPrice) / usdPrice
      : firstCurrency === 'EUR' && secondCurrency === 'RUR' //EUR > RUR
      ? (firstValue * eurPrice) / rurPrice
      : firstCurrency === 'EUR' && secondCurrency === 'BTC' //EUR > BTC
      ? firstValue / (btcPrice * (usdPrice / eurPrice))
      : //USD >
      firstCurrency === 'USD' && secondCurrency === 'UAH' //USD > UAH
      ? firstValue * usdPrice
      : firstCurrency === 'USD' && secondCurrency === 'EUR' //USD > EUR
      ? (firstValue * usdPrice) / eurPrice
      : firstCurrency === 'USD' && secondCurrency === 'RUR' //USD > RUR
      ? (firstValue * usdPrice) / rurPrice
      : firstCurrency === 'USD' && secondCurrency === 'BTC' //USD > BTC
      ? firstValue / btcPrice
      : // RUR >
      firstCurrency === 'RUR' && secondCurrency === 'UAH' //RUR > UAH
      ? firstValue * rurPrice
      : firstCurrency === 'RUR' && secondCurrency === 'EUR' //RUR > EUR
      ? (firstValue * rurPrice) / eurPrice
      : firstCurrency === 'RUR' && secondCurrency === 'USD' //RUR > USD
      ? (firstValue * rurPrice) / usdPrice
      : firstCurrency === 'RUR' && secondCurrency === 'BTC' //RUR > BTC
      ? (firstValue * rurPrice) / btcPrice
      : //BTC >
      firstCurrency === 'BTC' && secondCurrency === 'UAH' //BTC > UAH
      ? firstValue * (btcPrice * usdPrice)
      : firstCurrency === 'BTC' && secondCurrency === 'EUR' //BTC > EUR
      ? firstValue * (btcPrice * (usdPrice / eurPrice))
      : firstCurrency === 'BTC' && secondCurrency === 'USD' //BTC > USD
      ? firstValue * btcPrice
      : firstCurrency === 'BTC' && secondCurrency === 'RUR' //BTC > RUR
      ? firstValue * (btcPrice * (usdPrice / rurPrice))
      : 0;

  return { convertedValue, eurPrice, usdPrice, rurPrice, btcPrice };
};
