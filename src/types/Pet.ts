export interface PetInterface {
  id: number;
  image_url: string;
  species: string;
  name: string;
  gender: string;
  age: string;
  color: string;
  description: string;
  liked?: boolean;
}
