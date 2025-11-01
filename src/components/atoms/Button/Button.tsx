import classNames from 'classnames';
import './Button.scss';
import { Icon } from '../Icon';
import { ButtonProps } from './Button.type';

export default function Button({ icon, onClick, className }: ButtonProps) {
  const classNameButton = classNames(
    {
      button: true,
      [`button--s`]: true,
    },
    className
  );

  return (
    <button className={classNameButton} onClick={onClick}>
      <Icon name={icon} />
    </button>
  );
}
