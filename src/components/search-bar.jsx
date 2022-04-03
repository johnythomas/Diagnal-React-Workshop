import PropTypes from 'prop-types';
import { useRef } from 'react';

function SearchBar({ query, onChange }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleBackBtnClick = () => {
    onChange('');
  };

  const handleChange = (e) => {
    const { target: { value } } = e;
    onChange(value);
  };

  return (
    <div className="flex items-center fixed top-0 h-32 w-full bg-[url('../public/Slices/nav_bar.png')] bg-cover px-[30px]">
      <div className="flex align-middle" role="button" tabIndex={0} onKeyDown={handleBackBtnClick} onClick={handleBackBtnClick}>
        <img
          className="w-7 h-6"
          src={`${process.env.PUBLIC_URL}/Slices/Back.png`}
          alt="search-icon"
        />
      </div>
      <span className="px-14 text-white grow">
        <input
          ref={inputRef}
          type="text"
          className="w-full bg-transparent focus:outline-none font-body text-xl"
          value={query}
          onChange={handleChange}
        />
      </span>
      <div role="button" tabIndex={0} className="flex align-middle" onKeyDown={handleClick} onClick={handleClick}>
        <img
          className="w-7 h-6"
          src={`${process.env.PUBLIC_URL}/Slices/search.png`}
          alt="search-icon"
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
