import './App.css';
import { Provider } from 'react-redux';
import MovieList from './components/movie-list';
import SearchBar from './components/search-bar';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div className="bg-black min-h-screen">
        <SearchBar />
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
