import { Form } from '@/components/molecules/Form';
import './CreateProductPage.scss';
import { PetInterface } from '@/types/Pet';
import { useState } from 'react';
import { pets } from '@/mocks/pets';

export default function CreateProductPage() {
  function handleAddPet(newPet: PetInterface) {
    pets.push(newPet); // добавляем в конец массива
    console.log('Новая карточка:', newPet);
  }

  return <Form onAdd={handleAddPet} />;
}
