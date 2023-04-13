import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/SearchBox';
import { Character } from '../types/types';
import Popup from '../components/Popup';
import Loading from '../components/Loading';
import RenderApiCards from '../components/RenderApiCards';
import NothingHere from '../components/NothingHere';
import { useGetGoodsQuery } from '../store/goodsApi';
import { RootState } from '../store';
import { addSearch } from '../store/sliceSearchReducer';

export default function Home() {
  const searchValue = useSelector((state: RootState) => state.search.search);
  const [search, setSearch] = useState(searchValue || '');
  const [popupContent, setPopupContent] = useState<Character[]>([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const { data = [], isLoading, error } = useGetGoodsQuery({ name: searchValue });
  const dispatch = useDispatch();

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlerOnClick = async () => {
    dispatch(addSearch({ search }));
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
