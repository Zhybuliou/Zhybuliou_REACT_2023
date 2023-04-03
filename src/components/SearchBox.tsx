import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';
import Input from './Input';

export default function SearchBox() {
  const localValue = localStorage.getItem('search') as string;
  const [myValue, setMyValue] = useState(localValue || '');
  const valueRef = useRef<string>('');

  useEffect(() => {
    valueRef.current = myValue;
  }, [myValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', valueRef.current);
    };
  }, []);

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
