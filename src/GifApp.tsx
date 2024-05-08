import { useState } from 'react';
import style from './GifApp.module.scss';
import AddCategory from './components/AddCategory/AddCategory';
import GisfsList from './components/GifsList/GisfsList';

const GifApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (value: string) => {
    if (categories.includes(value)) return;
    //first value to show the first
    setCategories([value, ...categories]);
  };
  return (
    <main className={`${style.gif} wrapper`}>
      <h1 className={style.gif__title}>GifApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GisfsList key={category} category={category} />
      ))}
    </main>
  );
};

export default GifApp;
