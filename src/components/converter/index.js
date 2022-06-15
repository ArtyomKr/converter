import { useDispatch, useSelector } from 'react-redux';
import CurrencyInput from '../currencyInput';
import fetchRates from '../../services/thunks';
import { DEFAULT_CURRENCIES } from '../../utils/constants';

function Converter() {
  const dispatch = useDispatch();
  const { ratesData } = useSelector((state) => state.rates);

  const handleChange = (base, amount) => {
    dispatch(fetchRates({ base, amount })).catch((err) =>
      console.log(err.message)
    );
  };

  return (
    <div className="converter">
      <div className="converter__input">
        {Object.values(ratesData).length
          ? DEFAULT_CURRENCIES.map((currency) => (
              <CurrencyInput
                key={currency}
                name={currency}
                value={ratesData[currency] ?? 0}
                onChange={handleChange}
              />
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}

export default Converter;
