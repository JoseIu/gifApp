import { useState } from 'react';
import style from './GifApp.module.scss';
import AddCategory from './components/AddCategory/AddCategory';
import GisfsList from './components/GifsList/GisfsList';

const GifApp = () => {
  const { searchTerm, history, setSearchTerm } = useSearchHistory();

  const onAddCategory = (value: string) => {
    if (history.includes(value)) return;
    //first value to show the first
    setSearchTerm(value);
  };
  return (
    <main className={`${style.gif} wrapper`}>
      <h1 className={style.gif__title}>GifApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {searchTerm && <GisfsList searchTerm={searchTerm} />}
    </main>
  );
};

interface SearchHistory {
  history: string[];
  searchTerm: string;
}

const useSearchHistory = () => {
  const [searchInfo, setSearchInfo] = useState<SearchHistory>({
    history: [],
    searchTerm: '',
  });

  const setSearchTerm = (searchTerm: string) =>
    setSearchInfo({ history: [searchTerm, ...searchInfo.history], searchTerm });

  return {
    history: searchInfo.history,
    searchTerm: searchInfo.searchTerm,
    setSearchTerm,
  };
};

export default GifApp;
