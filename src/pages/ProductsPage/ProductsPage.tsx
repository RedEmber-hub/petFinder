import { Card } from '@/components/atoms/Card';
import './ProductsPage.scss';
import { pets } from '@/mocks/pets';
import { links } from '@/config/links';
import { NavLink } from 'react-router';

export default function ProductsPage() {
  return (
    <main className="product-page__content flex flex_column">
      <div className="product-page__filter"></div>

      <div className="product-page__card flex flex_wrap gap-50">
        {pets.map((pet) => (
          <NavLink to={links.productDescription.to} className="navlink-reset">
            <Card cardProp={pet} />
          </NavLink>
        ))}
      </div>

      <div className="product-page__pagination"></div>
    </main>
  );
}
