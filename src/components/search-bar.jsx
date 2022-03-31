import PropTypes from 'prop-types';
import { useState } from 'react';

function SearchBar({ searchKey }) {
  const [query, setQuery] = useState(searchKey);

  const handleChange = (e) => {
    const { target: { value } } = e;
    setQuery(value);
  };

  return (
    <div className="flex items-center fixed top-0 h-48 w-full bg-[url('../public/Slices/nav_bar.png')] bg-cover px-[30px]">
      <div className="flex align-middle">
        <img
          className="w-7 h-6"
          src={`${process.env.PUBLIC_URL}/Slices/Back.png`}
          alt="search-icon"
        />
      </div>
      <span className="px-14 text-white grow">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none font-body text-xl"
          value={query}
          onChange={handleChange}
        />
      </span>
      <div className="flex align-middle">
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
  searchKey: PropTypes.string.isRequired,
};

export default SearchBar;
