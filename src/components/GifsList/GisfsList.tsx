import { useEffect, useState } from 'react';
import getGifsFetch from '../../helpers/getGifs';
import GifCard from '../GifCard/GifCard';
import { Gif } from '../interfaces/gif.interface';
import style from './GifsList.module.scss';

interface GifsListProps {
  category: string;
}

const GisfsList = ({ category }: GifsListProps) => {
  const [gifs, setGifs] = useState<Gif[]>();

  const getGifs = async () => {
    const gifsData = await getGifsFetch(category);
    setGifs(gifsData);
  };

  useEffect(() => {
    getGifs();
  }, []);
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
