import { useMemo, useState } from 'react';

const useFilter = ({ movies }) => {
  const [query, setQuery] = useState('');

  const onFilterChange = (e) => {
    const { target: { value } } = e;
    setQuery(value);
  };

  const filteredMovies = useMemo(
    () => movies.filter((movie) => movie.name.toLowerCase().includes(query)),
    [movies, query],
  );

  return {
    query,
    filteredMovies,
    onFilterChange,
  };
};

export default useFilter;
