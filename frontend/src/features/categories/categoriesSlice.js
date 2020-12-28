import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCategories } from '../../services/drinks';

const initialState = {
  categories: [],
  isLoading: false,
  error: null
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    return await getCategories();
  });

const categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default categories.reducer;

export const selectAllCategories = (state) => state.categories.categories;
