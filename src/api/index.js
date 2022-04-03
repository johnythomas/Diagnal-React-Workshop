import { v4 as uuidv4 } from 'uuid';

const fetchMovies = async (pageNumber) => {
  const response = await fetch(
    `CONTENTLISTINGPAGE-PAGE${pageNumber}.json`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  const data = await response.json();

  // transforming data and adding id
  const transformedResult = {
    pageNumber: data.page['page-num-requested'],
    totalItems: data.page['total-content-items'],
    movies: data.page['content-items'].content.map(({ name, 'poster-image': posterImage }) => ({
      id: uuidv4(),
      name,
      posterImage,
    })),
  };

  return transformedResult;
};

export default fetchMovies;
