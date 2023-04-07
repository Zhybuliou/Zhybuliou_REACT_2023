import { Character } from '../types/types';

export default function Popup({ ...props }) {
  return (
    <div className="pop_up_container" onClick={() => props.changeContent([])}>
      <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
        <div className="pop_up_header">
          <button role="close-popup" onClick={() => props.changeContent([])}>
            x
          </button>
        </div>
        <div className="pop_up_content">
          {props.popupContent?.map((character: Character) => {
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
