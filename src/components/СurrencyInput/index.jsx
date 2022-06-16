import propTypes from 'prop-types';
import { useState } from 'react';
import './index.scss';

function CurrencyInput({ name, onChange, value }) {
  const [localValue, setLocalValue] = useState(0);
  const [isInFocus, setIsInFocus] = useState(false);

  const handleFocus = () => {
    setIsInFocus(true);
    setLocalValue(value);
  };

  const handleBlur = () => {
    setIsInFocus(false);
    onChange(name, localValue);
  };

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange(name, e.target.value);
  };

  return (
    <div className="currency-input">
      <label className="currency-input__label" htmlFor={name}>
        {name}
      </label>
      <input
        type="number"
        min="0"
        value={isInFocus ? localValue : value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="currency-input__input-field"
        id={name}
      />
    </div>
  );
}

CurrencyInput.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  value: propTypes.number
};

export default CurrencyInput;
