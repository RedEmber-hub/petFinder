import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../Button';
import { Icon } from '../Icon';
import './Card.scss';
const ageMap = {
    adult: 'взрослый',
    young: 'молодой',
    baby: 'малютка',
    elderly: 'пожилой',
};
export default function Card({ cardProp, isLiked, onDelete, onLike, onClick }) {
    return (_jsxs("div", { className: "card flex flex_column gap_8 cursor-pointer", onClick: onClick, children: [_jsx("div", { className: "card__image", children: _jsx("img", { src: cardProp.image_url, alt: cardProp.name }) }), _jsxs("div", { className: "card__button flex", children: [_jsx(Button, { icon: "like", size: "s", onClick: (e) => {
                            e.stopPropagation(); // предотвращаем срабатывание навигации
                            onLike();
                        }, children: _jsx(Icon, { name: "like", fillColor: isLiked ? 'red' : 'white' }) }), _jsx(Button, { icon: "delete", size: "s", onClick: (e) => {
                            e.stopPropagation(); // предотвращаем срабатывание навигации
                            onDelete();
                        }, children: _jsx(Icon, { name: "delete", fillColor: "white" }) })] }), _jsxs("div", { className: "card__content flex flex_column gap_2", children: [_jsx("div", { className: "card__name", children: _jsx("span", { className: "text-color--black body-s body-s--bold", children: cardProp.name }) }), _jsx("div", { className: "card_details-age", children: _jsx("span", { className: "text-color--secondary body-xs body-xs--bold", children: `Возраст: ${ageMap[cardProp.age] ?? 'неизвестно'}` }) }), _jsx("div", { className: "card__description text-truncated", children: _jsx("span", { className: "text-color--secondary body-xs", children: cardProp.description }) })] })] }));
}
