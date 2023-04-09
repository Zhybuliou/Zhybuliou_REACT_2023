import { Character } from '../types/types';

export default function Popup({
  popupContent,
  changeContent,
}: {
  popupContent: Character[];
  changeContent: (character: Character[]) => void;
}) {
  return (
    <div
      className="pop_up_container"
      onClick={(event) => {
        const hasClass = event.target as Element;
        if (hasClass.classList.contains('pop_up_container')) changeContent([]);
      }}
      aria-hidden
    >
      <div className="pop_up_body" data-testid="popup">
        <div className="pop_up_header">
          <button type="button" onClick={() => changeContent([])}>
            x
          </button>
        </div>
        <div className="pop_up_content">
          {popupContent?.map((character: Character) => {
            return (
              <div className="pop_up_card" key={character.id}>
                <div
                  className="pop_up_card_img"
                  style={{
                    backgroundImage: `url(${character.image})`,
                  }}
                />
                <div className="pop_up_card_info">
                  <ul>
                    <li>Name: {character.name}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Status: {character.status}</li>
                    <li>Species: {character.species}</li>
                    <li>Location: {character.origin?.name}</li>
                    <li>Type: {character.type || 'unknown'}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
