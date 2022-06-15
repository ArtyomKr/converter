import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCurrency,
  removeCurrency
} from '../../store/reducers/converterSlice';
import AddButton from '../AddButton';
import RemoveButton from '../RemoveButton';
import Selector from '../Selector';
import CurrencyInput from '../СurrencyInput';

function Converter() {
  const dispatch = useDispatch();
  const { ratesData } = useSelector((state) => state.ratesSlice);
  const { currencies } = useSelector((state) => state.converterSlice);

  const ratesArr = Object.keys(ratesData);
  const [isSelectorOpened, setIsSelectorOpened] = useState(false);

  const toggleSelector = () => {
    setIsSelectorOpened((prev) => !prev);
  };

  const addNewCurrency = (e) => {
    dispatch(addCurrency(e.target.dataset.name));
  };

  const deleteCurrency = (name) => {
    dispatch(removeCurrency(name));
  };

  return (
    <div className="converter">
      {ratesArr.length ? (
        <>
          <div className="converter__inputs">
            {currencies.map((currency) => (
              <div key={currency}>
                <CurrencyInput name={currency} />
                <RemoveButton onClick={() => deleteCurrency(currency)} />
              </div>
            ))}
          </div>
          <AddButton onClick={toggleSelector}>Add new currency</AddButton>
          <Selector
            items={ratesArr.filter(
              (currency) => !currencies.includes(currency)
            )}
            isOpened={isSelectorOpened}
            onClick={addNewCurrency}
          />
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Converter;
