import { useParams } from 'react-router';
import './ProductPage.scss';
import { useMemo } from 'react';
import { pets } from '@/mocks/pets';

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
          <span className="subtitle-lg subtitle-lg--semibold">{currentPet.species}</span>
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
              <span className="subtitle-lg subtitle-lg--semibold">{currentPet.gender}</span>
            </div>
          </div>

          <div className="product-page__detail flex gap_10">
            <div className="product-page__label">
              <span className="subtitle-lg subtitle-lg--semibold">Возраст:</span>
            </div>
            <div className="product-page__value">
              <span className="subtitle-lg subtitle-lg--semibold">{currentPet.age}</span>
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
