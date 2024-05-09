import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifCard from '../GifCard/GifCard';
import style from './GifsList.module.scss';

interface GifsListProps {
  category: string;
}

const GisfsList = ({ category }: GifsListProps) => {
  const { gifs, isLoading } = useFetchGifs(category);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2 className={style.title}>{category}</h2>

      <div className={style.gifs}>
        {gifs?.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default GisfsList;
