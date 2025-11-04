import { PetInterface } from '@/types/Pet';

export type FormProps = {
  onAdd: (pet: PetInterface) => void;
};
