import { combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from './features/categories/categoriesSlice';
import drinksSlice from './features/drinks/drinksSlice';

const rootReducer = combineReducers({
  categories: categoriesSlice,
  drinks: drinksSlice,
});

export default rootReducer;
