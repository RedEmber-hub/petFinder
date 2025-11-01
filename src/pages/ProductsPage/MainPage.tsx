import { Card } from '@/components/atoms/Card';
import { pets } from '@/mocks/pets';
import { links } from '@/config/links';
import { NavLink } from 'react-router';
import { Select } from '@/components/atoms/Select';
import './MainPage.scss';
import { filters } from '@/mocks/filters';

export default function ProductsPage() {
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
        {pets.map((pet) => (
          <NavLink to={links.productAbout.to} className="navlink-reset">
            <Card cardProp={pet} />
          </NavLink>
        ))}
      </div>

      <div className="main-page__pagination"></div>
    </main>
  );
}
