import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

const IMG_FALLBACK = 'placeholder_for_missing_posters.png';

function MovieCard({ title, thumbnail }) {
  const [src, setSrc] = useState(thumbnail);

  const onError = useCallback(() => {
    setSrc(IMG_FALLBACK);
  }, []);

  return (
    <figure>
      <img
        className="w-full aspect-auto"
        src={`${process.env.PUBLIC_URL}/Slices/${src}`}
        alt={title}
        onError={onError}
      />
      <figcaption
        className="mt-6 truncate text-white text-sm md:text-lg font-light font-body"
      >
        {title}
      </figcaption>
    </figure>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};

MovieCard.defaultProps = {
  thumbnail: '',
};

export default MovieCard;
