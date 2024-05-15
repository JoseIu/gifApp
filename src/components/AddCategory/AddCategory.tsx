import { useState } from 'react';
import getGifsFetch from '../../helpers/getGifs';
import useGifs from '../../hooks/useGifs';
import style from './AddCategory.module.scss';

interface AddCategoryProps {
  onNewCategory: (value: string) => void;
}

const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputvalue, setInputvalue] = useState('');
  //set gifs fetch
  const { setGifs, setLoading } = useGifs();

  const handleSudmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputvalue.trim().length <= 1) return;
    onNewCategory(inputvalue);

    setLoading();
    const gifs = await getGifsFetch(inputvalue);
    setGifs(gifs);

    setInputvalue('');
  };

  return (
    <form onSubmit={handleSudmit} className={style.form}>
      <input
        className={style.form__search}
        type="search"
        name="search"
        id="search"
        placeholder="Search a gif..."
        value={inputvalue}
        onChange={(event) => setInputvalue(event.target.value)}
      />
    </form>
  );
};

export default AddCategory;
