import React, { PureComponent } from 'react';
import CARDS from '../data/const';
import Card from './Card';

export default class Cards extends PureComponent {
  render() {
    return (
      <div className="wrapper-cards">
        {CARDS.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    );
  }
}
