import PropTypes from 'prop-types';
import Image from './image';

function MovieCard({ title, thumbnail }) {
  return (
    <figure>
      <Image
        className="w-full aspect-auto"
        src={thumbnail}
        alt={title}
      />
      <figcaption
        className="mt-4 truncate text-white text-sm md:text-lg xl:text-xl 2xl:text-2xl font-light font-body"
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
