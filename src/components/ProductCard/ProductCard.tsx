import './ProductCard.scss';
import img from '../../images/Product.png';
import favorites from '../../images/icons/favorites.svg';
import { Link } from 'react-router-dom';
type Props = {
  id: number;
  price: number;
};
export const ProductCard: React.FC<Props> = ({ id, price }) => {
  return (
    <div className="productCard">
      <img
        className="productCard__img"
        src={img}
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
      />

      <h2 className="productCard__title">
        <Link to={`/phones/${id}`} state={{ id, price }}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </Link>
      </h2>

      <div className="productCard__bottom-content">
        <div className="productCard__prices">
          $799
          <div className="productCard__old-price">
            $999
            <span className="productCard__line-through">$999</span>
          </div>
        </div>

        <div className="productCard__divider" />

        <div className="productCard__info">
          <div className="productCard__info-row">
            Screen
            <span className="productCard__info-value">6.1” OLED</span>
          </div>

          <div className="productCard__info-row">
            Capacity
            <span className="productCard__info-value">128 GB</span>
          </div>

          <div className="productCard__info-row">
            RAM
            <span className="productCard__info-value">6 GB</span>
          </div>
        </div>

        <div className="productCard__btns">
          <button
            type="button"
            className="
            productCard__addToCart
            productCard__btn"
          >
            Add to cart
          </button>

          <button
            type="button"
            className="
            productCard__favorites
            productCard__btn"
          >
            <img src={favorites} alt="favorites" />
          </button>
        </div>
      </div>
    </div>
  );
};
