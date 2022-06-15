import { configureStore, combineReducers } from '@reduxjs/toolkit';
import converterSlice from './reducers/converterSlice';
import ratesSlice from './reducers/ratesSlice';

const rootReducer = combineReducers({
  ratesSlice,
  converterSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};
