import {
  useCallback, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByPage, selectHasNextPage, selectIsFetching } from '../state/moviesSlice';

const useMovies = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector((state) => selectHasNextPage(state));
  const isFetching = useSelector((state) => selectIsFetching(state));

  const getData = useCallback(async () => {
    if (!hasNextPage) return;
    dispatch(fetchMoviesByPage());
  }, [dispatch, hasNextPage]);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    hasNextPage,
    isFetching,
    fetchNextPage: getData,
  };
};

export default useMovies;
