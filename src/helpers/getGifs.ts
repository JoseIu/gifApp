import { Gif } from '../interfaces/gif.interface';
import { ResponseGifs } from '../interfaces/responseGifs.interface';

const getGifsFetch = async (category: string): Promise<Gif[]> => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20&q=${category}`;

  const response = await fetch(BASE_URL);
  const { data } = (await response.json()) as ResponseGifs;

  const gifs: Gif[] = data.map((gif) => ({
    id: gif.id,
    url: gif.images.downsized_medium.url || '',
    title: gif.title,
    alt_text: gif.alt_text,
    user: gif.user,
  }));

  return gifs;
};

export default getGifsFetch;
