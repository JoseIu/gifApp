import { useContext } from 'react';
import { GifsContext } from '../context/gifsProvider';

const useGifs = () => {
  return useContext(GifsContext);
};

export default useGifs;
