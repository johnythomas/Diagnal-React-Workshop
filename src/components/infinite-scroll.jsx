import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function InfiniteScroll({ children, hasNextPage, fetchNextPage }) {
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    // const observer = new IntersectionObserver(handleObserver);
    if (loader.current && hasNextPage) observer.observe(loader.current);
  }, [handleObserver, hasNextPage]);

  return (
    <>
      {children}
      <div ref={loader} />
    </>
  );
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
};

export default InfiniteScroll;
