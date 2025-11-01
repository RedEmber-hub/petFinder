import { Button } from '../Button';
import './Card.scss';
import { CardProps } from './Card.type';

export default function Card({ cardProp }: CardProps) {
  return (
    <div className="card flex flex_column gap_8 cursor-pointer">
      <div className="card__image">
        <img src="https://ethnomir.ru/upload/medialibrary/3ce/1.jpg" alt="котёнок" />
      </div>

      {/* кнопка закрыть */}
      <Button icon="like" />

      <div className="card__content flex flex_column gap_2">
        <div className="card__name">
          <span className="text-color--black body-s body-s--bold">{cardProp.name}</span>
        </div>

        <div className="card_details-age">
          <span className="text-color--secondary body-xs body-xs--bold">{`Возраст: ${cardProp.age}`}</span>
        </div>

        <div className="card__description text-truncated">
          <span className="text-color--secondary body-xs">{cardProp.description}</span>
        </div>
      </div>

      <div className="card_footer">{/* кнопка лайк */}</div>
    </div>
  );
}
