import { useState } from 'react';
import SearchBar from '../components/SearchBox';
import { Character } from '../types/types';
import Popup from '../components/Popup';
import Loading from '../components/Loading';
import RenderApiCards from '../components/RenderApiCards';
import NothingHere from '../components/NothingHere';
import { useGetGoodsQuery } from '../store/goodsApi';

export default function Home() {
  // const localValue = localStorage.getItem('search') as string;
  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [popupContent, setPopupContent] = useState<Character[]>([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const { data = [], isLoading, error } = useGetGoodsQuery({ name: searchWord });

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlerOnClick = async () => {
    setSearchWord(search);
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
      {isLoading && <Loading />}
      {error !== undefined ? (
        <NothingHere />
      ) : (
        <RenderApiCards char={data.results} changeContent={changeContent} />
      )}

      {popupToggle && <Popup popupContent={popupContent} changeContent={changeContent} />}
    </>
  );
}
