import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

const useMovies = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const getData = useCallback(async (_page) => {
    if (!hasNextPage) return;
    const res = await fetch(
      `CONTENTLISTINGPAGE-PAGE${_page}.json`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    const json = await res.json();
    setData((_data) => [..._data, json]);
    setHasNextPage(
      (data.length ? data[0] : json)?.page['total-content-items'] > _page * 20,
    );
  }, [data, hasNextPage]);

  useEffect(() => {
    getData(page);
  }, [page]);

  const fetchNextPage = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const movies = useMemo(
    () => data.map((d) => d.page['content-items'].content).flat(),
    [data],
  );

  return {
    movies,
    hasNextPage,
    fetchNextPage,
  };
};

export default useMovies;
