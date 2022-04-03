import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

const IMG_FALLBACK = 'placeholder_for_missing_posters.png';

function Image({ src: srcProp, alt, ...restProps }) {
  const [src, setSrc] = useState(srcProp);

  const onError = useCallback(() => {
    setSrc(IMG_FALLBACK);
  }, []);

  return (
    <img
      src={`${process.env.PUBLIC_URL}/Slices/${src}`}
      alt={alt}
      onError={onError}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
