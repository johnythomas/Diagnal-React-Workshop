import './App.css';
import MovieList from './components/movie-list';
import SearchBar from './components/search-bar';

function App() {
  return (
    <div className="bg-black">
      <SearchBar searchKey="Search key" />
      <MovieList />
    </div>
  );
}

export default App;
