import { useEffect, useState } from 'react';
import { Gif } from '../components/interfaces/gif.interface';
import getGifsFetch from '../helpers/getGifs';

interface GifsFetch {
  gifs: Gif[];
  isLoading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [gifsState, setGifsState] = useState<GifsFetch>({
    gifs: [],
    isLoading: true,
  });

  const setGifs = (gifs: Gif[]) => setGifsState({ gifs, isLoading: false });

  const getGifs = async () => {
    const gifsData = await getGifsFetch(category);
    setGifs(gifsData);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return {
    gifs: gifsState.gifs,
    isLoading: gifsState.isLoading,
  };
};
