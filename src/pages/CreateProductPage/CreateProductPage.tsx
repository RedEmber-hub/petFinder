import './CreateProductPage.scss';

import { Form } from '@/components/molecules/Form';
import { PetInterface } from '@/types/Pet';
import { pets } from '@/mocks/pets';
import { useNavigate } from 'react-router';

export default function CreateProductPage() {
  const navigate = useNavigate();

  function handleAddPet(newPet: PetInterface) {
    // добавляет новую карточку в начало массива
    pets.unshift(newPet);
    navigate('/products');
  }

  return <Form onAdd={handleAddPet} />;
}
