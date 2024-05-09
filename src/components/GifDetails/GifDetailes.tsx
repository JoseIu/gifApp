import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGifs from '../../hooks/useGifs';
import { Gif } from '../../interfaces/gif.interface';

const GifDetailes = () => {
  const { id } = useParams();
  const [gifDetails, setGifDetails] = useState<Gif>();
  const { gifs } = useGifs();

  useEffect(() => {
    const gif = gifs.find((gif) => gif.id === id);
    if (!gif) return;
    setGifDetails(gif);
  }, [id, gifs]);
  return (
    <section>
      <span>GOla</span>
      <h2> {gifDetails?.title} </h2>
      <img src={gifDetails?.url} alt="" />
    </section>
  );
};

export default GifDetailes;
