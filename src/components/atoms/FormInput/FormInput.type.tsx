export interface FormInputProps {
  label: string;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: number;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  required?: boolean;
}
