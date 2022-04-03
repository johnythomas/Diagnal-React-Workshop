import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuery, updateQuery } from '../state/moviesSlice';

const useFilter = () => {
  const query = useSelector((state) => selectQuery(state));
  const dispatch = useDispatch();

  const onFilterChange = useCallback((_query) => {
    dispatch(updateQuery(_query));
  }, [dispatch]);

  return {
    query,
    onFilterChange,
  };
};

export default useFilter;
