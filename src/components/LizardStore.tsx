import React, { useState } from 'react';
import { lizards } from '../data/lizards';
import LizardCard from './LizardCard';
import Header from './Header';
import Cart from './Cart';
import { Filter } from 'lucide-react';

const LizardStore: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredLizards = lizards.filter(lizard => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'inStock') return lizard.inStock;
    return lizard.careLevel === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a LizardShop
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            La mejor selección de lagartos y reptiles para tu hogar
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-green-700 px-4 py-2 rounded-full">✓ Garantía de salud</div>
            <div className="bg-green-700 px-4 py-2 rounded-full">✓ Envío seguro</div>
            <div className="bg-green-700 px-4 py-2 rounded-full">✓ Soporte experto</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'all', label: 'Todos' },
              { value: 'inStock', label: 'En Stock' },
              { value: 'Fácil', label: 'Fácil Cuidado' },
              { value: 'Intermedio', label: 'Intermedio' },
              { value: 'Avanzado', label: 'Avanzado' }
            ].map(filter => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter.value
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLizards.map(lizard => (
            <LizardCard key={lizard.id} lizard={lizard} />
          ))}
        </div>

        {filteredLizards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron lagartos con los filtros seleccionados.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🦎 LizardShop</h3>
              <p className="text-gray-300">
                Tu tienda especializada en reptiles con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Cuidados y Guías</li>
                <li>Garantía de Salud</li>
                <li>Envíos y Devoluciones</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <div className="text-gray-300 space-y-2">
                <p>📧 info@lizardshop.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Reptile Street, Pet City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LizardShop. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default LizardStore;