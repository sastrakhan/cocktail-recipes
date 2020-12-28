import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDrinkById, getDrinks } from '../../services/drinks';

const initialState = {
  drinks: [],
  isLoading: false,
  error: null,
  status: 'idle',
};

export const fetchDrinks = createAsyncThunk(
  'drinks/fetchDrinks',
  async (params = {}) => {
    return await getDrinks(params);
  });

export const fetchDrink = createAsyncThunk(
  'drinks/fetchDrink',
  async (id) => {
    return await getDrinkById(id);
  });

const drinks = createSlice({
  name: 'drinks',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchDrink.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDrink.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const notAlreadyInState = state.drinks.indexOf(action.payload) === -1;
      if (notAlreadyInState) {
        state.drinks = [...state.drinks, action.payload];
      }
    },
    [fetchDrink.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [fetchDrinks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDrinks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.drinks = action.payload;
    },
    [fetchDrinks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default drinks.reducer;

export const selectAllDrinks = (state) => state.drinks.drinks;

export const selectDrinkById = (state, drinkId) => (
  state.drinks.drinks.find((item) => item.id === drinkId)
);
