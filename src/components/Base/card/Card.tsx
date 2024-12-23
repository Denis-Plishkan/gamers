import PictureComponent from "../PictureComponent";
import './Card.scss';

interface CardProps {
  imgSrc: string;
  imgSrcset: string;
  alt: string;
  group?: string;
  name?: string;
  price?: number;
}

const Card: React.FC<CardProps> = ( { imgSrc, imgSrcset, alt, group, name, price } ) => {
  return (
    <div className="card">
      <div className="card__img">
        <PictureComponent src={imgSrc} srcset={imgSrcset} alt={alt}/>
      </div>
      <h4 className="card__group">{group}</h4>
      <p className="card__name">{name}</p>
      <p className="card__price">{price}</p>
    </div>
  )
}

export default Card;