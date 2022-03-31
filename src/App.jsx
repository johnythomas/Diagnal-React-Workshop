import './App.css';
import MovieList from './components/movie-list';
import SearchBar from './components/search-bar';
import useFilter from './hooks/use-filter';
import useMovies from './hooks/use-movies';

function App() {
  // TODO: Move this to redux
  const { movies, hasNextPage, fetchNextPage } = useMovies();
  // TODO: Use a selector to do the filtering
  const {
    query,
    filteredMovies,
    onFilterChange,
  } = useFilter({ movies });

  return (
    <div className="bg-black min-h-screen">
      <SearchBar query={query} onChange={onFilterChange} />
      <MovieList movies={filteredMovies} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default App;
