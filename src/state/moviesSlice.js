/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import fetchMovies from '../api';

export const fetchMoviesByPage = createAsyncThunk(
  'movies/fetMovies',
  (_, { getState }) => {
    const { movies: { nextPageNumber } } = getState();
    return fetchMovies(nextPageNumber);
  },
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    data: [],
    nextPageNumber: 1,
    totalItems: null,
  },
  query: '',
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByPage.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchMoviesByPage.fulfilled, (state, action) => {
        const { payload: { movies, totalItems } } = action;
        state.data.push(...movies);
        state.totalItems = Number(totalItems);
        state.nextPageNumber += 1;
      });
  },
});

const selectMovies = (state) => state.movies.data;
const selectTotalItems = (state) => state.movies.totalItems;
const selectIsFetching = (state) => state.movies.isLoading;
const selectQuery = (state) => state.movies.query;

const selectFilteredMovies = createSelector(
  [selectMovies, selectQuery],
  (movies, query) => (!query ? movies : movies.filter(
    ({ name }) => name.toLowerCase().includes(query?.toLowerCase()),
  )),
);

const selectHasNextPage = createSelector(
  [selectMovies, selectTotalItems],
  (movies, totalItems) => totalItems === null || totalItems > movies.length,
);

export const { updateQuery } = movieSlice.actions;

export {
  selectMovies, selectFilteredMovies, selectHasNextPage, selectIsFetching, selectQuery,
};

export default movieSlice.reducer;
