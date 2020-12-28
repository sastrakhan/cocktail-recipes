import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDrinkById, getDrinks } from '../../services/drinks';

const initialState = {
  drinks: [],
  filteredDrinks: [],
  error: null,
  status: 'idle',
};

export const fetchDrinks = createAsyncThunk(
  'drinks/fetchDrinks',
  async () => {
    return await getDrinks();
  });

export const fetchFilteredDrinks = createAsyncThunk(
  'drinks/fetchFilteredDrinks',
  async (params) => {
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
  reducers: {
    resetFilteredDrinks(state) {
      state.filteredDrinks = state.drinks;
    },
  },
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
      state.filteredDrinks = action.payload;
    },
    [fetchDrinks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [fetchFilteredDrinks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchFilteredDrinks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.filteredDrinks = action.payload;
    },
    [fetchFilteredDrinks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { resetFilteredDrinks } = drinks.actions;

export default drinks.reducer;

export const selectAllDrinks = (state) => state.drinks.drinks;

export const selectDrinkById = (state, drinkId) => (
  state.drinks.drinks.find((item) => item.id === drinkId)
);
