import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';
import Input from './Input';

export default function SearchBox() {
  const localValue = localStorage.getItem('search') as string;
  const [myValue, setMyValue] = useState(localValue || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('search', `${myValue}`);
    };
  }, [myValue]);

  return (
    <div className="wrapper-search-module">
      <div className="wrapper-search">
        <div className="search-icon">
          <FaSearch />
        </div>
        <Input
          valueInput={myValue}
          typeInput="search"
          classInput="search-box"
          placeholder="search ..."
          handleChange={(data) => setMyValue(data)}
        />
        <Button text="search" classButton="search-btn" />
      </div>
    </div>
  );
}
