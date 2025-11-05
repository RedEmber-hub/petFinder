import { useState } from 'react';
import { PetInterface } from '@/types/Pet';
import { filters } from '@/mocks/filters';
import './Form.scss';
import { FormProps } from './Form.type';

export default function Form({ onAdd }: FormProps) {
  const [values, setValues] = useState<Omit<PetInterface, 'id' | 'liked'>>({
    name: '',
    species: '',
    gender: '',
    age: '',
    color: '',
    image_url: '',
    description: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Проверка обязательных полей
    if (!values.name.trim()) return alert('Введите имя питомца');
    for (const filter of filters) {
      if (!values[filter.id as keyof typeof values]) {
        return alert(`Выберите ${filter.label}`);
      }
    }

    // Минимальная дополнительная валидация
    if (values.name.trim().length < 2) return alert('Имя должно быть минимум 2 символа');
    if (values.image_url && !/^https?:\/\//.test(values.image_url)) return alert('Введите корректный URL изображения');
    if (values.description.length > 200) return alert('Описание слишком длинное (макс. 200 символов)');

    const newPet: PetInterface = {
      ...values,
      id: Date.now(),
    };

    onAdd(newPet);

    // Сброс формы
    setValues({
      name: '',
      species: '',
      gender: '',
      age: '',
      color: '',
      image_url: '',
      description: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form flex flex_column gap_10">
      {/* Name */}
      <label>
        Имя:
        <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Введите имя питомца" />
      </label>

      {/* Select поля */}
      {filters.map((filter) => (
        <label key={filter.id}>
          {filter.label}:
          <select name={filter.id} value={values[filter.id as keyof typeof values]} onChange={handleChange}>
            <option value="">Выберите {filter.label.toLowerCase()}</option>
            {filter.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      ))}

      {/* Дополнительно URL и описание */}
      <label>
        Image URL:
        <input
          type="text"
          name="image_url"
          value={values.image_url}
          onChange={handleChange}
          placeholder="Введите ссылку на изображение"
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Введите описание питомца"
        />
      </label>

      <button type="submit">Добавить карточку</button>
    </form>
  );
}
