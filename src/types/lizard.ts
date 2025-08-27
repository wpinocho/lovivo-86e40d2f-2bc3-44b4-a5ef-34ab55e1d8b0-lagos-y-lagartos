export interface Lizard {
  id: string;
  name: string;
  species: string;
  price: number;
  image: string;
  description: string;
  age: string;
  size: string;
  temperament: string;
  careLevel: 'Fácil' | 'Intermedio' | 'Avanzado';
  inStock: boolean;
}

export interface CartItem {
  lizard: Lizard;
  quantity: number;
}