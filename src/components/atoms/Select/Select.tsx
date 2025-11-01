import { useState } from 'react';
import { Icon } from '../Icon';
import './Select.scss';
import classNames from 'classnames';
import { SelectProps } from './Select.type';
import { FilterOption } from '@/types/Filters';

export default function Select({ placeholder, options = [], onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState<FilterOption | null>(null);

  const className = classNames({
    select: true,
    flex: true,
    flex_column: true,
    gap_4: true,
    'select--open': isOpen,
  });

  function toggleSelect() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleSelect(option: FilterOption) {
    setSelected(option);
    setIsOpen(false);
  }
  return (
    <div className={className}>
      <div className="select__selection flex gap_4 cursor-pointer" onClick={toggleSelect}>
        <div className="select__label flex">
          <span className="body-s body-s--medium text-color--primery cursor-pointer">
            {selected ? selected.label : placeholder}
          </span>
        </div>

        <div className="select__icon flex">
          <Icon name="arrow" />
        </div>
      </div>

      {isOpen && (
        <ul className="select__list">
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
