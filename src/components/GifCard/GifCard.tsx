import { Link } from 'react-router-dom';
import { Gif } from '../../interfaces/gif.interface';
import style from './GifCard.module.scss';

interface GifCardProps {
  gif: Gif;
}
const GifCard = ({ gif }: GifCardProps) => {
  return (
    <article className={style.gif}>
      <Link to={`/gifs/${gif.id}`} className={style.gif__link}>
        <img className={style.gif__img} src={gif.url} alt={gif.alt_text} />
      </Link>

      <div className={style.gif__info}>
        <h3 className={style.gif__title}>{gif.title}</h3>
        <span>User: {gif.user ? gif.user.username : 'Unknow'} </span>
      </div>
    </article>
  );
};

export default GifCard;
