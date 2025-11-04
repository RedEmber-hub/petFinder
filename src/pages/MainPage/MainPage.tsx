import { Card } from '@/components/atoms/Card';
import { pets } from '@/mocks/pets';
import { NavLink, useOutletContext } from 'react-router';
import { Select } from '@/components/atoms/Select';
import './MainPage.scss';
import { filters } from '@/mocks/filters';
import { useMemo } from 'react';

export default function ProductsPage() {
  const { search } = useOutletContext<{ search: string }>();

  console.log('pets:', pets);
  console.log('search:', search);
  const filteredPets = useMemo(() => {
    return (pets || []).filter((pet) => (pet?.species ?? '').toLowerCase().includes((search ?? '').toLowerCase()));
  }, [pets, search]);

  return (
    <main className="main-page__content flex flex_column gap_30">
      <div className="main-page__filter flex">
        {filters.map((filter) => (
          <Select
            key={filter.id}
            placeholder={filter.label} // обязательная строка
            options={filter.options} // массив FilterOption
            onChange={(value) => console.log(filter.id, value)}
          />
        ))}
      </div>

      <div className="main-page__card flex flex_wrap gap_50">
        {(filteredPets || []).map((pet) => (
          <NavLink key={pet.id} to={`/products/${pet.id}`} className="navlink-reset">
            <Card cardProp={pet} />
          </NavLink>
        ))}
      </div>

      <div className="main-page__pagination"></div>
    </main>
  );
}
