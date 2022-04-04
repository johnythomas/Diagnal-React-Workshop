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
        <div className="px-3 md:px-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-x-4 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 gap-y-6 pt-28 lg:pt-32">
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
