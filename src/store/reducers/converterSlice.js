import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencies: ['USD', 'EUR', 'BYN', 'RUB']
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    addCurrency: (state, action) => {
      state.currencies.push(action.payload);
    },
    removeCurrency: (state, action) => {
      state.currencies = state.currencies.filter(
        (currency) => currency !== action.payload
      );
    }
  }
});

export const { addCurrency, removeCurrency } = converterSlice.actions;

export default converterSlice.reducer;
