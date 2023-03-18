import React, { PureComponent } from 'react';
import { BiHeart, BiCart } from 'react-icons/bi';

type CardType = {
  id: string;
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  dollars: string;
  alt: string;
  expdate: string;
};

export default class Card extends PureComponent<CardType> {
  render() {
    const { alt, image, title, expdate, dollars, oldPrice, newPrice } = this.props;
    return (
      <div className="card" data-testid="card">
        <div className="wrapper-card">
          <div className={`color_bg ${alt}`} />
          <div
            className="card_img"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${image})` }}
          />
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
}
