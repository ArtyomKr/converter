import { configureStore } from '@reduxjs/toolkit';
import ratesSlice from './reducers/ratesSlice';

export const setupStore = () => {
  return configureStore({
    reducer: { rates: ratesSlice }
  });
};
