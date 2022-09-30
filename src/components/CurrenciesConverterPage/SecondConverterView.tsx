import { useCurrenciesConvertorData } from '../../hooks/useCurrenciesConvertorData';
import { CurrencySelect } from '../../components/CurrenciesConverterPage/CurrencySelect';
import { CurrencyValue } from '../../components/CurrenciesConverterPage/CurrencyValue';
import { ChangeArrow } from '../../components/CurrenciesConverterPage/ChangeArrow';
import { SecondViewSelectionContainer } from '../../styles/SecondConverterViewStyle';
import { useConvert } from '../../hooks/useConvert';
import { MainContainer } from '../../styles/SecondConverterViewStyle';

export const SecondConverterView = () => {
  //Taking converted value from custome hook
  const { convertedValue } = useConvert();

  let convertedStrValue =
    convertedValue === 0
      ? String(convertedValue.toFixed(0))
      : String(convertedValue.toFixed(2));

  //Taking data from custom hook
  const {
    firstCurrency,
    secondCurrency,
    firstCurrencyValue,
    handleFirstCurrencyChange,
    handleSecondCurrencyChange,
    handleFirstCurrencyValue,
    handleSecondCurrencyValue,
    handleClick,
  } = useCurrenciesConvertorData();

  return (
    <MainContainer>
      <SecondViewSelectionContainer>
        <CurrencySelect
          handleChange={handleFirstCurrencyChange}
          value={firstCurrency}
          width={'300px'}
        />
        <CurrencyValue
          handleChange={handleFirstCurrencyValue}
          value={firstCurrencyValue}
          handleClick={handleClick}
          readOnly={false}
          width={'300px'}
        />
      </SecondViewSelectionContainer>

      <ChangeArrow />

      <SecondViewSelectionContainer>
        <CurrencySelect
          handleChange={handleSecondCurrencyChange}
          value={secondCurrency}
          width={'300px'}
        />
        <CurrencyValue
          handleChange={handleSecondCurrencyValue}
          value={convertedStrValue}
          readOnly={true}
          width={'300px'}
        />
      </SecondViewSelectionContainer>
    </MainContainer>
  );
};
