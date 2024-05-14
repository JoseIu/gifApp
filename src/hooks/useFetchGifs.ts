import { useEffect, useState } from 'react';
import getGifsFetch from '../helpers/getGifs';
import { Gif } from '../interfaces/gif.interface';

interface GifsFetch {
  gifs: Gif[];
  isLoading: boolean;
}
//THIS HOOK IS NOT USED IN THE PROJECT(THINKS HOW TO USE IN CONTEXT OR NOT)
export const useFetchGifs = (searchTerm: string) => {
  const [gifsState, setGifsState] = useState<GifsFetch>({
    gifs: [],
    isLoading: true,
  });

  const setGifs = (gifs: Gif[]) => setGifsState({ gifs, isLoading: false });

  useEffect(() => {
    const getGifs = async () => {
      const gifsData = await getGifsFetch(searchTerm);
      setGifs(gifsData);
    };
    getGifs();
  }, [searchTerm]);

  return {
    gifs: gifsState.gifs,
    isLoading: gifsState.isLoading,
  };
};
