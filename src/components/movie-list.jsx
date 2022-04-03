import InfiniteScroll from 'react-infinite-scroll-component';
import useMovies from '../hooks/use-movies';
import MovieCard from './movie-card';

function MovieList() {
  const { hasNextPage, fetchNextPage, filteredMovies: movies } = useMovies();
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
    >
      {movies.length ? (
        <div className="px-3 grid grid-cols-3 gap-x-4 gap-y-6 pt-28">
          {movies.map(
            ({ name, posterImage, id }) => (
              <div className="snap-end" key={id}>
                <MovieCard title={name} thumbnail={posterImage} />
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="items-center text-white flex justify-center font-body font-light w-full h-screen">No Movies Present</div>
      )}
    </InfiniteScroll>
  );
}

export default MovieList;
