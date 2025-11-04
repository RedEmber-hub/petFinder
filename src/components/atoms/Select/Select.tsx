import { useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import './Select.scss';
import classNames from 'classnames';
import { SelectProps } from './Select.type';
import { FilterOption } from '@/types/Filters';

export default function Select({ placeholder, options = [], value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

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

  function handleSelect(option: FilterOption) {
    onChange(option.value); // передаём выбранное значение в родителя
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
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

  return (
    <div ref={selectRef} className={className}>
      <div className="select__selection flex gap_4 cursor-pointer" onClick={toggleSelect}>
        <div className="select__label flex">
          <span className="body-s body-s--medium text-color--primery cursor-pointer">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <div className="select__icon flex">
          <Icon name="arrow" />
        </div>
      </div>

      {isOpen && (
        <ul className="select__list cursor-pointer">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
