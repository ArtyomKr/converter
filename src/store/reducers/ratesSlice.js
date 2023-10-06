import { createSlice } from '@reduxjs/toolkit';
import fetchRates from '../../services/thunks';

const initialState = {
  ratesData: {},
  loading: 'idle',
  currentRequestId: null,
  error: null
};

const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.ratesData = action.payload;
          state.currentRequestId = null;
        }
      })
      .addCase(fetchRates.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = null;
        }
      });
  }
});

export default ratesSlice.reducer;
