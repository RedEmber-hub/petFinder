import { useState } from 'react';
import './Form.scss';
import { PetInterface } from '@/types/Pet';
import { pets } from '@/mocks/pets';
import { FormInput } from '@/components/atoms/FormInput';
import { inputConfigs } from '@/mocks/inputConfig';

// Тип для формы без id
type FormValues = Omit<PetInterface, 'id'>;

export default function Form() {
  const [values, setValues] = useState<FormValues>({
    image_url: '',
    name: '',
    species: '',
    gender: '',
    age: 0,
    description: '',
  });

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // простая валидация
    for (const field of inputConfigs) {
      const val = values[field.name];
      if (field.required && (val === '' || val === null || val === undefined)) {
        alert(field.errorMessage);
        return;
      }
    }

    const newCard: PetInterface = {
      ...values,
      id: Date.now(),
    };

    pets.push(newCard);
    console.log('Все карточки:', pets);

    setValues({
      image_url: '',
      name: '',
      species: '',
      gender: '',
      age: 0,
      description: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form flex flex_column">
      {inputConfigs.map((config) => (
        <FormInput
          key={config.id}
          {...config}
          value={String(values[config.name])} // 🔹 конвертируем в строку
          onChange={onChange}
        />
      ))}
      <button type="submit">Добавить карточку</button>
    </form>
  );
}
