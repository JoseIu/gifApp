import { ReactNode, createContext, useState } from 'react';
import { Gif } from '../interfaces/gif.interface';
interface GifsProviderProps {
  children: ReactNode;
}
interface GifsFetch {
  gifs: Gif[];
  isLoading: boolean;
}

interface GifsContextProps {
  gifs: Gif[];
  isLoading: boolean;
  setLoading: () => void;
  setGifs: (gifs: Gif[]) => void;
}
export const GifsContext = createContext<GifsContextProps>({
  gifs: [],
  isLoading: false,
  setLoading: () => {},
  setGifs: () => {},
});

export const GifsProvider = ({ children }: GifsProviderProps) => {
  const [gifsState, setGifsState] = useState<GifsFetch>({
    gifs: [],
    isLoading: false,
  });
  const setLoading = () => setGifsState({ ...gifsState, isLoading: true });
  const setGifs = (gifs: Gif[]) => setGifsState({ gifs, isLoading: false });

  return (
    <GifsContext.Provider
      value={{ gifs: gifsState.gifs, isLoading: gifsState.isLoading, setLoading, setGifs }}
    >
      {children}
    </GifsContext.Provider>
  );
};
