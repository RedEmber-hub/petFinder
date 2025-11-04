import { PetInterface } from '@/types/Pet';

export interface CardProps {
  cardProp: PetInterface;
  onLike: () => void;
  onDelete: () => void;
  onClick: () => void;
}
