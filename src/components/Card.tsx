import { BiHeart, BiCart } from 'react-icons/bi';

type CardType = {
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  dollars: string;
  alt: string;
  expdate: string;
};

export default function Card({
  alt,
  image,
  title,
  expdate,
  dollars,
  oldPrice,
  newPrice,
}: CardType) {
  return (
    <div className="card" data-testid="card">
      <div className="wrapper-card">
        <div className={`color_bg ${alt}`} />
        <div className="card_img" style={{ backgroundImage: `url(${image})` }} />
        <BiHeart className="heart" />
        <div className="card-info">
          <h2>{title}</h2>
          <p className="date_">{expdate}</p>
          <div className="action">
            <div className="price-group">
              <p className="price old-price">
                {dollars}
                {oldPrice}
              </p>
              <p className="price new-price">
                {dollars}
                {newPrice}
              </p>
            </div>
            <BiCart className="cart out-cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
