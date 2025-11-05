import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import './Select.scss';
import classNames from 'classnames';
export default function Select({ placeholder, options = [], value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    const className = classNames({
        select: true,
        flex: true,
        flex_column: true,
        gap_4: true,
        'select--open': isOpen,
    });
    function toggleSelect() {
        setIsOpen((prev) => !prev);
    }
    function handleSelect(option) {
        onChange(option.value); // передаём выбранное значение в родителя
        setIsOpen(false);
    }
    useEffect(() => {
        if (!isOpen)
            return;
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);
    // Находим объект выбранной опции для отображения label
    const selectedOption = options.find((o) => o.value === value);
    return (_jsxs("div", { ref: selectRef, className: className, children: [_jsx("div", { className: "select__selection flex gap_4 cursor-pointer", onClick: toggleSelect, children: _jsx("div", { className: "select__label flex", children: _jsx("span", { className: "body-s body-s--medium text-color--primary cursor-pointer", children: selectedOption ? selectedOption.label : placeholder }) }) }), isOpen && (_jsx("ul", { className: "select__list cursor-pointer", children: options.map((option) => (_jsx("li", { onClick: () => handleSelect(option), children: option.label }, option.value))) }))] }));
}
