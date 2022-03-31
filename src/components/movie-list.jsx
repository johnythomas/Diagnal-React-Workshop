import { useMemo } from 'react';
import useMovies from '../hooks/use-movies';
import InfiniteScroll from './infinite-scroll';
import MovieCard from './movie-card';

function MovieList() {
  const { movies, hasNextPage, fetchNextPage } = useMovies();
  const moviesWithId = useMemo(() => movies.map((movie, index) => (
    {
      ...movie,
      id: index,
    })), [movies]);
  return (
    <InfiniteScroll hasNextPage={hasNextPage} fetchNextPage={fetchNextPage}>
      <div className="px-[30px] grid grid-cols-3 gap-x-8 gap-y-[90px] pt-[228px]">
        {moviesWithId.map(
          ({ name, 'poster-image': posterImage, id }) => (
            <MovieCard key={id} title={name} thumbnail={posterImage} />
          ),
        )}
      </div>
    </InfiniteScroll>
  );
}

export default MovieList;
