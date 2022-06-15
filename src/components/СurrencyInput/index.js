import propTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRates from '../../services/thunks';

function CurrencyInput({ name }) {
  const dispatch = useDispatch();
  const rate = useSelector((state) => state.ratesSlice.ratesData[name]);
  const [localValue, setLocalValue] = useState(0);
  const [isInFocus, setIsInFocus] = useState(false);

  const updateRates = (base, amount) => {
    dispatch(fetchRates({ base, amount })).catch((err) =>
      console.log(err.message)
    );
  };

  const handleFocus = () => {
    setIsInFocus(true);
    setLocalValue(rate);
  };

  const handleBlur = () => {
    setIsInFocus(false);
  };

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    updateRates(name, e.target.value);
  };

  return (
    <label>
      {name}
      <input
        type="tel"
        inputMode="decimal"
        value={isInFocus ? localValue : rate}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
}

CurrencyInput.propTypes = {
  name: propTypes.string
};

export default CurrencyInput;
