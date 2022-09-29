import { useCurrentCurrencyContext } from '../../context/CurrentCurrencyContext';

import { UAHCurrencyList } from './UAHCurrencyList';
import { USDCurrencyList } from './USDCurrencyList';
import { EURCurrencyList } from './EURCurrencyList';
import { RURCurrencyList } from './RURCurrencyList';
import { BTCCurrencyList } from './BTCCurrencyList';
import { CurrenciesListContainer } from '../../styles/CurrenciesListPage';

export const CurrenciesList = () => {
  const { currentCurrency } = useCurrentCurrencyContext();

  return (
    <CurrenciesListContainer>
      {/* Current currency === 'UAH' */}
      {currentCurrency === 'UAH' && <UAHCurrencyList />}
      {/* Current currency === 'USD' */}
      {currentCurrency === 'USD' && <USDCurrencyList />}
      {/* Current currency === EUR' */}
      {currentCurrency === 'EUR' && <EURCurrencyList />}
      {/* Current currency === 'RUR' */}
      {currentCurrency === 'RUR' && <RURCurrencyList />}
      {/* Current currency === 'BTC' */}
      {currentCurrency === 'BTC' && <BTCCurrencyList />}
    </CurrenciesListContainer>
  );
};
