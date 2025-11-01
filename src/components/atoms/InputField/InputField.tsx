import classNames from 'classnames';
import { FieldProps, InputFieldProps } from './InputField.type';
import './InputField.scss';

function Root({ children }: InputFieldProps) {
  const className = classNames({
    input: true,
  });

  return <div className={className}>{children}</div>;
}

function Field({ onChangeValue, ...props }: FieldProps) {
  return (
    <div className="input__input-element flex">
      <input
        type="text"
        value={props.value}
        {...props}
        onInput={(event) => onChangeValue?.((event.target as HTMLInputElement).value)}
      />
    </div>
  );
}

function Slot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const InputField = Object.assign(Root, {
  Field,
  Slot,
});
