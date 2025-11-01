export interface FilterOption {
  value: string;
  label: string;
}

export interface filtersInterface {
  id: string;
  label: string;
  options: FilterOption[];
}
