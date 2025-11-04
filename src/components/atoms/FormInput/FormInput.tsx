import './FormInput.scss';
import { FormInputProps } from './FormInput.type';

export default function FormInput({
  label,
  errorMessage,
  onChange,
  id,
  type,
  name,
  value,
  placeholder,
  required,
}: FormInputProps) {
  return (
    <div className="formInput flex flex_column">
      <div className="formInput__label">
        <label className="body-xs body-xs--medium black">{label}</label>
      </div>

      <div className="formInput__input body-xs black">
        <input
          id={String(id)}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      </div>

      <div className="formInput__error">
        <span className="body-2xs">{errorMessage}</span>
      </div>
    </div>
  );
}
