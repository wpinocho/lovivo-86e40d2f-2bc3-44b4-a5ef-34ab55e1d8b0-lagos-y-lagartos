import { Lizard } from '../types/lizard';

export const lizards: Lizard[] = [
  {
    id: '1',
    name: 'Gecko Leopardo Premium',
    species: 'Eublepharis macularius',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
    description: 'Hermoso gecko leopardo con patrones únicos. Ideal para principiantes.',
    age: '6 meses',
    size: '15-20 cm',
    temperament: 'Dócil',
    careLevel: 'Fácil',
    inStock: true
  },
  {
    id: '2',
    name: 'Dragón Barbudo Juvenil',
    species: 'Pogona vitticeps',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Dragón barbudo sociable y amigable. Perfecto como mascota familiar.',
    age: '4 meses',
    size: '25-30 cm',
    temperament: 'Amigable',
    careLevel: 'Intermedio',
    inStock: true
  },
  {
    id: '3',
    name: 'Iguana Verde Bebé',
    species: 'Iguana iguana',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551191916-8b7c2c4b8f5b?w=400&h=300&fit=crop',
    description: 'Iguana verde joven con colores vibrantes. Requiere cuidados especializados.',
    age: '3 meses',
    size: '20-25 cm',
    temperament: 'Territorial',
    careLevel: 'Avanzado',
    inStock: true
  },
  {
    id: '4',
    name: 'Gecko Crestado Morph',
    species: 'Correlophus ciliatus',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1567358621394-3a2b4f7c8b8e?w=400&h=300&fit=crop',
    description: 'Gecko crestado con morfología especial. Nocturno y fascinante.',
    age: '8 meses',
    size: '18-22 cm',
    temperament: 'Tranquilo',
    careLevel: 'Intermedio',
    inStock: false
  },
  {
    id: '5',
    name: 'Anolis Verde',
    species: 'Anolis carolinensis',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Pequeño anolis verde muy activo. Ideal para terrarios plantados.',
    age: '2 meses',
    size: '12-15 cm',
    temperament: 'Activo',
    careLevel: 'Fácil',
    inStock: true
  },
  {
    id: '6',
    name: 'Monitor de Sabana',
    species: 'Varanus exanthematicus',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551191916-8b7c2c4b8f5b?w=400&h=300&fit=crop',
    description: 'Monitor de sabana inteligente y curioso. Solo para expertos.',
    age: '1 año',
    size: '40-50 cm',
    temperament: 'Inteligente',
    careLevel: 'Avanzado',
    inStock: true
  }
];