import propTypes from 'prop-types';
import { useState } from 'react';

function CurrencyInput({ name, onChange, value }) {
  const [localValue, setLocalValue] = useState(value);
  const [isInFocus, setIsInFocus] = useState(false);

  const handleFocus = () => {
    setIsInFocus(true);
    setLocalValue(value);
  };

  const handleBlur = (e) => {
    setIsInFocus(false);
    onChange(name, e.target.value);
  };

  const handleChange = (e) => {
    onChange(name, e.target.value);
    setLocalValue(e.target.value);
  };

  return (
    <label>
      {name}
      <input
        type="tel"
        inputMode="decimal"
        value={isInFocus ? localValue : value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
}

CurrencyInput.propTypes = {
  name: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.number
};

export default CurrencyInput;
