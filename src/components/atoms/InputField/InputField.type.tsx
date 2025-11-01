export interface InputFieldProps {
  children: React.ReactNode;
}

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeValue?: (value: string) => void;
}
