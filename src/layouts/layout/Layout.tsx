import { Icon } from '@/components/atoms/Icon';
import './Layout.scss';
import { InputField } from '@/components/atoms/InputField';
import { NavLink, Outlet } from 'react-router';
import { links } from '@/config/links';
import { useState } from 'react';
import { Button } from '@/components/atoms/Button';

export default function Layout() {
  const [search, setSearch] = useState('');

  return (
    <div className="layout flex flex_column">
      <div className="layout__header flex gap_16 mb_12">
        {/* логотип*/}
        <div className="layout__logo-link flex">
          <NavLink to={links.logo.to}>
            <Icon name="logo" size={48} />
          </NavLink>
        </div>

        {/* инпут для поиска*/}
        <div className="layout__search">
          <InputField>
            <InputField.Field placeholder="Поиск питомца" value={search} onChangeValue={setSearch} />

            <InputField.Slot>
              <Button size="s">
                <Icon name="search" />
              </Button>
            </InputField.Slot>
          </InputField>
        </div>

        {/* ссылка на создание нового продукта*/}
        <div className="layout__create-product-link flex">
          <NavLink to="/create-product" className="text-color--white body-xs">
            {links.createProduct.label}
          </NavLink>
        </div>
      </div>

      <div className="layout__outlet">
        <Outlet context={{ search }} />
      </div>
    </div>
  );
}
