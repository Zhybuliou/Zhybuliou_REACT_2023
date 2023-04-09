import { FaSearch } from 'react-icons/fa';
import Button from './Button';

export default function SearchBar({ search, handlerOnChange, handleKeyDown, handlerOnClick }: any) {
  return (
    <div className="wrapper-search-module">
      <div className="wrapper-search">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          // role="search"
          className="search-api"
          placeholder="search character ..."
          value={search}
          onChange={handlerOnChange}
          onKeyUp={(e) => handleKeyDown(e)}
        />
        <Button
          // role="button"
          classButton="search-btn"
          text="search"
          onClick={handlerOnClick}
        />
      </div>
    </div>
  );
}
