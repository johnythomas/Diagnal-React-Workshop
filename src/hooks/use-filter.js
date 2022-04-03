import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredMovies } from '../state/moviesSlice';

const useFilter = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = useSelector((state) => selectFilteredMovies(state, query));

  return {
    query,
    filteredMovies,
    onFilterChange: setQuery,
  };
};

export default useFilter;
