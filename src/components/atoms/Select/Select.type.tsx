import { FilterOption } from '@/types/Filters';

export interface SelectProps {
  placeholder?: string;
  options: FilterOption[];
  onChange?: (value: string) => void;
}
