import { Icon } from '@/components/atoms/Icon';
import './Layout.scss';
import { InputField } from '@/components/atoms/InputField';
import { NavLink, Outlet } from 'react-router';
import { links } from '@/config/links';

export default function Layout() {
  return (
    <div className="layout flex flex_column gap_8">
      <div className="layout__header flex gap_16 mb_12">
        {/* логотип*/}
        <div className="layout__logo-link flex">
          <NavLink to={links.logo.to}>
            <Icon name="logo" />
          </NavLink>
        </div>

        {/* инпут для поиска*/}
        <div className="layout__search">
          <InputField>
            <InputField.Field placeholder="Поиск питомца" />

            <InputField.Slot>
              <Icon name="search" />
            </InputField.Slot>
          </InputField>
        </div>

        {/* ссылка на создание нового продукта*/}
        <div className="layout__create-product-link flex">
          <NavLink to={links.createProduct.to} className="text-color--white body-xs">
            {links.createProduct.label}
          </NavLink>
        </div>
      </div>

      <div className="layout__outlet">
        <Outlet />
      </div>
    </div>
  );
}
