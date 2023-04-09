import { useEffect, useRef, useState } from 'react';
import SearchBar from '../components/SearchBox';
import apiResult from '../service/api';
import URL from '../data/url';
import { Character } from '../types/types';
import Popup from '../components/Popup';
import Loading from '../components/Loading';
import RenderApiCards from '../components/RenderApiCards';
import NothingHere from '../components/NothingHere';

export default function Home() {
  const localValue = localStorage.getItem('search') as string;
  const [search, setSearch] = useState(localValue || '');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [popupContent, setPopupContent] = useState<Character[]>([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const valueRef = useRef<string>('');

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    valueRef.current = search;
  }, [search]);

  useEffect(() => {
    apiResult(URL, localStorage.getItem('search') || '').then((data) => {
      setCharacters(data.results);
      setIsPending(false);
    });
    return () => {
      localStorage.setItem('search', valueRef.current);
    };
  }, []);
  const handlerOnClick = async () => {
    setIsPending(true);
    setTimeout(async () => {
      const data = await apiResult(URL, search);
      setCharacters(data.results);
      if (data.error) {
        (() => {
          setCharacters([]);
          setIsPending(false);
        })();
      } else {
        (() => {
          setCharacters(data.results);
          setIsPending(false);
        })();
      }
    }, 1500);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handlerOnClick();
    }
  };

  const changeContent = (character: Character[]) => {
    setPopupContent(character);
    setPopupToggle(!popupToggle);
  };
  return (
    <>
      <h2>Home Page</h2>
      <SearchBar
        search={search}
        handlerOnChange={handlerOnChange}
        handleKeyDown={handleKeyDown}
        handlerOnClick={handlerOnClick}
      />
      {isPending && <Loading />}
      {isPending || <RenderApiCards char={characters} changeContent={changeContent} />}
      {characters?.length > 0 || <NothingHere />}

      {popupToggle && <Popup popupContent={popupContent} changeContent={changeContent} />}
    </>
  );
}
