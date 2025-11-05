import { FilterOption } from '@/types/Filters';

export interface SelectProps {
  placeholder?: string;
  options: FilterOption[];
  value: string | number | boolean | null;
  onChange: (value: string) => void;
}
