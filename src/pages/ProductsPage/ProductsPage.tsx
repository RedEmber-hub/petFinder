import { Card } from '@/components/atoms/Card';
import './ProductsPage.scss';
import { pets } from '@/mocks/pets';
import { links } from '@/config/links';
import { NavLink } from 'react-router';

export default function ProductsPage() {
  return (
    <main className="layout__content flex flex_column">
      <div className="layout__filter"></div>

      <div className="layout__card flex flex_wrap gap-50">
        {pets.map((pet) => (
          <NavLink to={links.productDescription.to}>
            <Card cardProp={pet} />
          </NavLink>
        ))}
      </div>

      <div className="layout__pagination"></div>
    </main>
  );
}
