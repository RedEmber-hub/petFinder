import classNames from 'classnames';
import './Button.scss';
import { ButtonProps } from './Button.type';

export default function Button({ size, children, onClick }: Partial<ButtonProps>) {
  const className = classNames({
    button: true,
    [`button--${size}`]: size,
  });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
