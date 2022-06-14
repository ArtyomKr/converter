import { createAsyncThunk } from '@reduxjs/toolkit';
import getRates from '../requests';

const fetchRates = createAsyncThunk(
  'rates/fetchRates',
  async (
    { base, amount } = { base: 'USD', amount: 1 },
    { getState, requestId }
  ) => {
    const { currentRequestId, loading,  } = getState().rates;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    const response = await getRates(base, amount);
    return response.json();
  }
);

export default fetchRates;
