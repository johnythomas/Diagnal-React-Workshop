import { useRef } from 'react';
import useFilter from '../hooks/use-filter';
import Image from './image';

function SearchBar() {
  const {
    query,
    onFilterChange,
  } = useFilter();
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleBackBtnClick = () => {
    onFilterChange('');
  };

  const handleChange = (e) => {
    const { target: { value } } = e;
    onFilterChange(value);
  };

  return (
    <div className="flex items-center fixed top-0 h-28 md:h-32 w-full bg-[url('../public/Slices/nav_bar.png')] bg-cover bg-repeat-x px-3">
      <div className="flex align-middle" role="button" tabIndex={0} onKeyDown={handleBackBtnClick} onClick={handleBackBtnClick}>
        <img
          className="w-6 h-5"
          src={`${process.env.PUBLIC_URL}/Slices/Back.png`}
          alt="search-icon"
        />
      </div>
      <span className="px-4 text-white grow">
        <input
          ref={inputRef}
          type="text"
          className="w-full bg-transparent focus:outline-none font-body text-xl"
          value={query}
          onChange={handleChange}
        />
      </span>
      <div role="button" tabIndex={0} className="flex align-middle" onKeyDown={handleClick} onClick={handleClick}>
        <Image
          className="w-6 h-5"
          src="search.png"
          alt="search-icon"
        />
      </div>
    </div>
  );
}

export default SearchBar;
