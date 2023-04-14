import { FaSearch } from 'react-icons/fa';
import Button from './Button';

export default function SearchBar({
  search,
  handlerOnChange,
  handleKeyDown,
  handlerOnClick,
}: {
  search: string;
  handlerOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  handlerOnClick: () => void;
}) {
  return (
    <div className="wrapper-search-module">
      <div className="wrapper-search">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          className="search-api"
          placeholder="search character ..."
          value={search}
          onChange={handlerOnChange}
          onKeyUp={(e) => handleKeyDown(e)}
        />
        <Button
          classButton="search-btn"
          text="search"
          data-testid="button"
          onClick={handlerOnClick}
        />
      </div>
    </div>
  );
}
