import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sampleReducer from './slice';

const rootReducer = combineReducers({
  sample: sampleReducer 
});

const store = configureStore({ reducer: rootReducer });
export default store;
