import useGifs from '../../hooks/useGifs';
import GifCard from '../GifCard/GifCard';
import style from './GifsList.module.scss';

const GisfsList = () => {
  const { gifs, isLoading } = useGifs();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {gifs.length ? (
        <h2 className={style.title}>Results</h2>
      ) : (
        <span className={style.subttile}>Write something to search.... 🐱‍🏍</span>
      )}

      <div className={style.gifs}>
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default GisfsList;
