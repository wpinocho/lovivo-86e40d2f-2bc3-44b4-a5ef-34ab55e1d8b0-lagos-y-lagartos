import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Lizard } from '../types/lizard';

interface CartContextType {
  items: CartItem[];
  addToCart: (lizard: Lizard) => void;
  removeFromCart: (lizardId: string) => void;
  updateQuantity: (lizardId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (lizard: Lizard) => {
    console.log('Agregando al carrito:', lizard.name);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.lizard.id === lizard.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.lizard.id === lizard.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { lizard, quantity: 1 }];
    });
  };

  const removeFromCart = (lizardId: string) => {
    console.log('Removiendo del carrito:', lizardId);
    setItems(prevItems => prevItems.filter(item => item.lizard.id !== lizardId));
  };

  const updateQuantity = (lizardId: string, quantity: number) => {
    console.log('Actualizando cantidad:', lizardId, quantity);
    if (quantity <= 0) {
      removeFromCart(lizardId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.lizard.id === lizardId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    console.log('Limpiando carrito');
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.lizard.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};