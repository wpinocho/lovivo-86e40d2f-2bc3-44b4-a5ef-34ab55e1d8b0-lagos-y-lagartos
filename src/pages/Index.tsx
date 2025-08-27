import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import LizardStore from '../components/LizardStore';

const Index = () => {
  return (
    <CartProvider>
      <LizardStore />
    </CartProvider>
  );
};

export default Index;