import React from 'react';
import { Lizard } from '../types/lizard';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Info } from 'lucide-react';

interface LizardCardProps {
  lizard: Lizard;
}

const LizardCard: React.FC<LizardCardProps> = ({ lizard }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (lizard.inStock) {
      addToCart(lizard);
    }
  };

  const getCareColor = (level: string) => {
    switch (level) {
      case 'Fácil': return 'text-green-600 bg-green-100';
      case 'Intermedio': return 'text-yellow-600 bg-yellow-100';
      case 'Avanzado': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={lizard.image}
          alt={lizard.name}
          className="w-full h-48 object-cover"
        />
        {!lizard.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Agotado</span>
          </div>
        )}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getCareColor(lizard.careLevel)}`}>
          {lizard.careLevel}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{lizard.name}</h3>
        <p className="text-sm text-gray-600 italic mb-2">{lizard.species}</p>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{lizard.description}</p>
        
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
          <div><span className="font-medium">Edad:</span> {lizard.age}</div>
          <div><span className="font-medium">Tamaño:</span> {lizard.size}</div>
          <div><span className="font-medium">Temperamento:</span> {lizard.temperament}</div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${lizard.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!lizard.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              lizard.inStock
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{lizard.inStock ? 'Agregar' : 'Agotado'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LizardCard;