import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '@/components/atoms/Icon';
import './Layout.scss';
import { InputField } from '@/components/atoms/InputField';
import { NavLink, Outlet } from 'react-router';
import { links } from '@/config/links';
import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
export default function Layout() {
    const [search, setSearch] = useState('');
    return (_jsxs("div", { className: "layout flex flex_column", children: [_jsxs("div", { className: "layout__header flex gap_16 mb_12", children: [_jsx("div", { className: "layout__logo-link flex", children: _jsx(NavLink, { to: links.logo.to, children: _jsx(Icon, { name: "logo", size: 48 }) }) }), _jsx("div", { className: "layout__search", children: _jsxs(InputField, { children: [_jsx(InputField.Field, { placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u0438\u0442\u043E\u043C\u0446\u0430", value: search, onChangeValue: setSearch }), _jsx(InputField.Slot, { children: _jsx(Button, { size: "s", children: _jsx(Icon, { name: "search" }) }) })] }) }), _jsx("div", { className: "layout__create-product-link flex", children: _jsx(NavLink, { to: "/create-product", className: "text-color--white body-xs", children: links.createProduct.label }) })] }), _jsx("div", { className: "layout__outlet", children: _jsx(Outlet, { context: { search } }) })] }));
}
