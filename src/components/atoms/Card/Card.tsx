import { Button } from '../Button';
import './Card.scss';
import { CardProps } from './Card.type';

export default function Card({ cardProp, onDelete, onLike, onClick }: CardProps) {
  return (
    <div className="card flex flex_column gap_8 cursor-pointer" onClick={onClick}>
      <div className="card__image">
        <img src={cardProp.image_url} alt={cardProp.name} />
      </div>

      {/* кнопка лайк */}
      <Button
        icon="like"
        onClick={(e) => {
          e.stopPropagation(); // предотвращаем срабатывание навигации
          onLike();
        }}
      />

      {/* кнопка удалить */}
      <Button
        icon="delete"
        onClick={(e) => {
          e.stopPropagation(); // предотвращаем срабатывание навигации
          onDelete();
        }}
      />

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
    </div>
  );
}
