import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGifs from '../../hooks/useGifs';
import { Gif } from '../../interfaces/gif.interface';
import style from './GifDetailes.module.scss';

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
    <div className={`${style.container} wrapper`}>
      <p className={style.container__title}>GIF DETAILS</p>
      <Link to="/" className={style.gif__logo} aria-label="button to go back">
        Go Back
      </Link>
      <section className={style.gif}>
        <h2 className={style.gif__title}> {gifDetails?.title} </h2>
        <img className={style.gif__img} src={gifDetails?.url} alt={gifDetails?.alt_text} />
      </section>
    </div>
  );
};

export default GifDetailes;
