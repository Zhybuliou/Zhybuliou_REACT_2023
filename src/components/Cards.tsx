import { v4 as uuidv4 } from 'uuid';
import CARDS from '../data/const';
import Card from './Card';

export default function Cards() {
  return (
    <div className="wrapper-cards">
      {CARDS.map((card) => (
        <Card {...card} key={uuidv4()} />
      ))}
    </div>
  );
}
