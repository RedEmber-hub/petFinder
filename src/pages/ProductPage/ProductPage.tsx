import { useParams } from 'react-router';
import './ProductPage.scss';
import { useMemo } from 'react';
import { pets } from '@/mocks/pets';

const valueMap: Record<string, string> = {
  adult: 'взрослый',
  young: 'молодой',
  baby: 'малютка',
  elderly: 'пожилой',
  male: 'мужской',
  female: 'женский',
  cat: 'кошка/кот',
  dog: 'собака',
  bird: 'птица',
  rabbit: 'кролик',
  black: 'черный',
  brown: 'коричневый',
  white: 'белый',
  gray: 'серый',
  red: 'рыжий',
};

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const petId = Number(id);

  const currentPet = useMemo(() => {
    return pets.find((pet) => pet.id === petId);
  }, [pets, petId]);

  if (!currentPet) return <div>Питомец не найден</div>;

  return (
    <div className="product-page">
      <div className="product-page__header flex flex_column">
        <div className="product-page__name">
          <h1 className="heading">{currentPet.name}</h1>
        </div>
        <div className="product-page__species">
          <span className="subtitle-lg subtitle-lg--semibold">{valueMap[currentPet.species]}</span>
        </div>
      </div>

      <div className="product-page__main flex flex_column">
        <div className="product-page__photo">
          <img src={currentPet.image_url} alt="фото питомца" />
        </div>

        <div className="product-page__info">
          <div className="product-page__detail flex gap_10">
            <div className="product-page__label">
              <span className="subtitle-lg subtitle-lg--semibold">Пол:</span>
            </div>
            <div className="product-page__value">
              <span className="subtitle-lg subtitle-lg--semibold">{valueMap[currentPet.gender]}</span>
            </div>
          </div>

          <div className="product-page__detail flex gap_10">
            <div className="product-page__label">
              <span className="subtitle-lg subtitle-lg--semibold">Возраст:</span>
            </div>
            <div className="product-page__value">
              <span className="subtitle-lg subtitle-lg--semibold">{valueMap[currentPet.age]}</span>
            </div>
          </div>

          <div className="product-page__detail flex gap_10">
            <div className="product-page__label">
              <span className="subtitle-lg subtitle-lg--semibold">Рацветка:</span>
            </div>
            <div className="product-page__value">
              <span className="subtitle-lg subtitle-lg--semibold">{valueMap[currentPet.color]}</span>
            </div>
          </div>

          <div className="product-page__detail flex gap_10">
            <div className="product-page__label">
              <span className="subtitle-lg subtitle-lg--semibold">Описание:</span>
            </div>
            <div className="product-page__value">
              <span className="subtitle-lg subtitle-lg--semibold">{currentPet.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
