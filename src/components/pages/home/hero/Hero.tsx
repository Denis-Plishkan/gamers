import { data } from '../../../../data';
import './Hero.scss';
import { UIButton } from '@/components/UI';
import PictureComponent from '@/components/Base/PictureComponent';
import { DataItem } from '@/components/type';

const doc = data.find(item => item.id === 20) as DataItem | null;

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero-content">
          <div className="hero-content__left">
            <h1 className="hero-content__left-title">
              {doc?.title}
            </h1>
            <p className="hero-content__left-description">
              {doc?.description}
            </p>
            <div className="hero-content__left-price">
              {doc?.price} €
            </div>
            <div className="hero-content__left-button">
              <UIButton text='BUY NOW'/>
            </div>
          </div>
          <div className="hero-content__right">
            {doc?.img && (
              <PictureComponent
                src={doc.img.default}
                srcset={doc.img.webP}
                alt="dualshock"
              />
            )}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero;