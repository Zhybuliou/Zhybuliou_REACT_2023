import { Character } from '../types/types';

export default function RenderApiCards({
  char,
  changeContent,
}: {
  char: Character[];
  changeContent: (character: Character[]) => void;
}) {
  return (
    <div className="wrapper-cards">
      {char &&
        char.map((character: Character) => {
          return (
            <div className="card" data-testid="card" key={character.id}>
              <div
                className="wrapper-card"
                onClick={() => changeContent([character])}
                aria-hidden="true"
              >
                <div className="color_bg" />
                <div
                  className="card_img_api"
                  style={{
                    backgroundImage: `url(${character.image})`,
                  }}
                />
                <div className="card-info">
                  <h2>{character.name}</h2>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
