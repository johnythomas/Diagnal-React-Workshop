import {
  useCallback, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMoviesByPage, selectFilteredMovies, selectHasNextPage, selectIsFetching,
} from '../state/moviesSlice';

const useMovies = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector((state) => selectHasNextPage(state));
  const isFetching = useSelector((state) => selectIsFetching(state));
  const filteredMovies = useSelector((state) => selectFilteredMovies(state));

  const getData = useCallback(() => {
    dispatch(fetchMoviesByPage());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    hasNextPage,
    isFetching,
    fetchNextPage: getData,
    filteredMovies,
  };
};

export default useMovies;
