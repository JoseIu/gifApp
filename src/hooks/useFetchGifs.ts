import { useEffect, useState } from 'react';
import getGifsFetch from '../helpers/getGifs';
import { Gif } from '../interfaces/gif.interface';

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
