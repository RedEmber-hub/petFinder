export type InputFieldName = 'image_url' | 'name' | 'species' | 'gender' | 'age' | 'description';

export interface InputConfig {
  id: number;
  name: InputFieldName;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: string;
  required?: boolean;
  pattern?: string;
  min?: number;
}
