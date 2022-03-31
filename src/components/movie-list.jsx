import PropTypes from 'prop-types';
import InfiniteScroll from './infinite-scroll';
import MovieCard from './movie-card';

function MovieList({ movies, hasNextPage, fetchNextPage }) {
  return (
    <InfiniteScroll hasNextPage={hasNextPage} fetchNextPage={fetchNextPage}>
      {movies.length ? (
        <div className="px-[30px] grid grid-cols-3 gap-x-8 gap-y-[90px] pt-[228px]">
          {movies.map(
            ({ name, 'poster-image': posterImage }, id) => (
            // TODO generate the id after fetching the data
            // eslint-disable-next-line react/no-array-index-key
              <MovieCard key={id} title={name} thumbnail={posterImage} />
            ),
          )}
        </div>
      ) : (
        <div className="px-[30px] pt-[228px] text-white flex justify-center font-body font-light">No Movies Present</div>
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
