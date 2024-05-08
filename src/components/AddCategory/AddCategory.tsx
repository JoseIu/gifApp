import { useState } from 'react';
import style from './AddCategory.module.scss';

interface AddCategoryProps {
  onNewCategory: (value: string) => void;
}

const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputvalue, setInputvalue] = useState('');

  const handleSudmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputvalue.trim().length <= 1) return;
    onNewCategory(inputvalue);
    setInputvalue('');
  };

  return (
    <form onSubmit={handleSudmit}>
      <input
        className={style.search}
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
