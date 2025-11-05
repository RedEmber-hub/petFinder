import { Button } from '../Button';
import { Icon } from '../Icon';
import './Card.scss';
import { CardProps } from './Card.type';

const ageMap: Record<string, string> = {
  adult: 'взрослый',
  young: 'молодой',
  baby: 'малютка',
  elderly: 'пожилой',
};

export default function Card({ cardProp, isLiked, onDelete, onLike, onClick }: CardProps) {
  return (
    <div className="card flex flex_column gap_8 cursor-pointer" onClick={onClick}>
      <div className="card__image">
        <img src={cardProp.image_url} alt={cardProp.name} />
      </div>

      <div className="card__button flex">
        {/* кнопка лайк */}
        <Button
          icon="like"
          size="s"
          onClick={(e) => {
            e.stopPropagation(); // предотвращаем срабатывание навигации
            onLike();
          }}
        >
          <Icon name="like" fillColor={isLiked ? 'red' : 'white'} />
        </Button>

        {/* кнопка удалить */}
        <Button
          icon="delete"
          size="s"
          onClick={(e) => {
            e.stopPropagation(); // предотвращаем срабатывание навигации
            onDelete();
          }}
        >
          <Icon name="delete" fillColor="white" />
        </Button>
      </div>

      <div className="card__content flex flex_column gap_2">
        <div className="card__name">
          <span className="text-color--black body-s body-s--bold">{cardProp.name}</span>
        </div>

        <div className="card_details-age">
          <span className="text-color--secondary body-xs body-xs--bold">{`Возраст: ${
            ageMap[cardProp.age] ?? 'неизвестно'
          }`}</span>
        </div>

        <div className="card__description text-truncated">
          <span className="text-color--secondary body-xs">{cardProp.description}</span>
        </div>
      </div>
    </div>
  );
}
