import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifCard from '../GifCard/GifCard';
import style from './GifsList.module.scss';

interface GifsListProps {
  searchTerm: string;
}

const GisfsList = ({ searchTerm }: GifsListProps) => {
  console.log(searchTerm);
  const { gifs, isLoading } = useFetchGifs(searchTerm);
  console.log(gifs);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2 className={style.title}>{searchTerm}</h2>

      <div className={style.gifs}>
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default GisfsList;
