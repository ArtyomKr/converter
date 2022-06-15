import { createAsyncThunk } from '@reduxjs/toolkit';
import getRates from '../requests';

const fetchRates = createAsyncThunk(
  'rates/fetchRates',
  async ({ base, amount } = { base: 'USD', amount: 1 }) => {
    const response = await getRates(base, amount);
    return response.json();
  }
);

export default fetchRates;
