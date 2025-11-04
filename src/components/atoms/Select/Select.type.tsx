import { FilterOption } from '@/types/Filters';

export interface SelectProps {
  placeholder?: string;
  options: FilterOption[];
  value: string | number | null;
  onChange: (value: string) => void;
}
