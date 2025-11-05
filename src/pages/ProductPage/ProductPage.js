import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router';
import './ProductPage.scss';
import { useMemo } from 'react';
import { pets } from '@/mocks/pets';
const valueMap = {
    adult: 'взрослый',
    young: 'молодой',
    baby: 'малютка',
    elderly: 'пожилой',
    male: 'мужской',
    female: 'женский',
    cat: 'кошка/кот',
    dog: 'собака',
    bird: 'птица',
    rabbit: 'кролик',
    black: 'черный',
    brown: 'коричневый',
    white: 'белый',
    gray: 'серый',
    red: 'рыжий',
};
export default function ProductPage() {
    const { id } = useParams();
    const petId = Number(id);
    const currentPet = useMemo(() => {
        return pets.find((pet) => pet.id === petId);
    }, [pets, petId]);
    if (!currentPet)
        return _jsx("div", { children: "\u041F\u0438\u0442\u043E\u043C\u0435\u0446 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
    return (_jsxs("div", { className: "product-page", children: [_jsxs("div", { className: "product-page__header flex flex_column", children: [_jsx("div", { className: "product-page__name", children: _jsx("h1", { className: "heading", children: currentPet.name }) }), _jsx("div", { className: "product-page__species", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: valueMap[currentPet.species] }) })] }), _jsxs("div", { className: "product-page__main flex flex_column", children: [_jsx("div", { className: "product-page__photo", children: _jsx("img", { src: currentPet.image_url, alt: "\u0444\u043E\u0442\u043E \u043F\u0438\u0442\u043E\u043C\u0446\u0430" }) }), _jsxs("div", { className: "product-page__info", children: [_jsxs("div", { className: "product-page__detail flex gap_10", children: [_jsx("div", { className: "product-page__label", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: "\u041F\u043E\u043B:" }) }), _jsx("div", { className: "product-page__value", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: valueMap[currentPet.gender] }) })] }), _jsxs("div", { className: "product-page__detail flex gap_10", children: [_jsx("div", { className: "product-page__label", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442:" }) }), _jsx("div", { className: "product-page__value", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: valueMap[currentPet.age] }) })] }), _jsxs("div", { className: "product-page__detail flex gap_10", children: [_jsx("div", { className: "product-page__label", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: "\u0420\u0430\u0446\u0432\u0435\u0442\u043A\u0430:" }) }), _jsx("div", { className: "product-page__value", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: valueMap[currentPet.color] }) })] }), _jsxs("div", { className: "product-page__detail flex gap_10", children: [_jsx("div", { className: "product-page__label", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:" }) }), _jsx("div", { className: "product-page__value", children: _jsx("span", { className: "subtitle-lg subtitle-lg--semibold", children: currentPet.description }) })] })] })] })] }));
}
