import style from './GifApp.module.scss';
import AddCategory from './components/AddCategory/AddCategory';
import GisfsList from './components/GifsList/GisfsList';
import { useSearchHistory } from './hooks/useSearchHistory';

const GifApp = () => {
  const { history, setSearchTerm } = useSearchHistory();

  const onAddCategory = (value: string) => {
    if (history.includes(value)) return;
    //first value to show the first
    setSearchTerm(value);
  };
  return (
    <main className={`${style.gif} wrapper`}>
      <h1 className={style.gif__title}>GifApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <GisfsList />
    </main>
  );
};

export default GifApp;
