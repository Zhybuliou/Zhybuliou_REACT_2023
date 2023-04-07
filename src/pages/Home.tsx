import RenderApiCards from 'components/renderApiCards';
import SearchBar from 'components/searchBar';
import React, { useEffect, useState } from 'react';
import apiResult from '../service/api';
import URL from '../data/url';
import { Character } from '../types/types';
import Popup from '../components/Popup';
import NothingHere from '../components/NothingHere';
import Loading from '../components/Loading';

export default function ApiPage() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [popupContent, setPopupContent] = useState<Character[]>([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const [isPending, setIsPending] = useState(true);

  function handlerOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    apiResult(URL, '').then((data) => {
      setCharacters(data.results);
      setIsPending(false);
    });
  }, []);
  async function handlerOnClick() {
    setIsPending(true);
    setTimeout(async () => {
      const data = await apiResult(URL, search);
      data.error
        ? (() => {
            setCharacters([]);
            setIsPending(false);
          })()
        : (() => {
            setCharacters(data.results);
            setIsPending(false);
          })();
    }, 1500);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handlerOnClick();
    }
  }

  function changeContent(character: Character[]) {
    setPopupContent(character);
    setPopupToggle(!popupToggle);
    popupToggle
      ? (document.body.style.overflow = 'visible')
      : (document.body.style.overflow = 'hidden');
  }

  return (
    <>
      <h2>API Page</h2>
      <SearchBar
        search={search}
        handlerOnChange={handlerOnChange}
        handleKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
        handlerOnClick={handlerOnClick}
      />
      <div className="wrapper-cards">
        {isPending ? (
          <Loading />
        ) : characters.length ? (
          <RenderApiCards popupContent={characters} changeContent={changeContent} />
        ) : (
          <NothingHere />
        )}
      </div>
      {popupToggle && <Popup popupContent={popupContent} changeContent={() => changeContent([])} />}
    </>
  );
}
