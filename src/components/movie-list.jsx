import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './movie-card';

function MovieList({
  movies, hasNextPage, fetchNextPage,
}) {
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
        <div className="self-center text-white flex justify-center font-body font-light w-full">No Movies Present</div>
      )}
    </InfiniteScroll>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
};

export default MovieList;
