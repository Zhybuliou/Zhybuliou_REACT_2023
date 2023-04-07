import { Character } from '../types/types';

export default function RenderApiCards({ ...props }) {
  return (
    props.popupContent &&
    props.popupContent.map((character: Character) => {
      return (
        <div className="card" data-testid="card" key={character.id}>
          <div
            className="wrapper-card"
            role="card"
            onClick={() => props.changeContent([character])}
          >
            <div className="color_bg" />
            <div
              className="card_img_api"
              style={{
                backgroundImage: `url(${character.image})`,
              }}
            ></div>
            <div className="card-info">
              <h2>{character.name}</h2>
            </div>
          </div>
        </div>
      );
    })
  );
}