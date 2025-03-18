import React, { useState } from 'react';
import { ShoppingCart, Coffee } from 'lucide-react';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { CheckoutModal } from './components/CheckoutModal';
import { Receipt } from './components/Receipt';
import { products } from './data/products';
import { CartItem, Product, Transaction } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCompleteTransaction = (transaction: Transaction) => {
    setCurrentTransaction(transaction);
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="text-green-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">POS System</h1>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} />
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {cartItems.length}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductGrid
              products={products}
              onProductClick={handleAddToCart}
            />
          </div>
          <div>
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onCheckout={() => setIsCheckoutOpen(true)}
            />
          </div>
        </div>
      </main>

      {isCheckoutOpen && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          items={cartItems}
          onComplete={handleCompleteTransaction}
        />
      )}

      {currentTransaction && (
        <Receipt
          transaction={currentTransaction}
          onClose={() => setCurrentTransaction(null)}
        />
      )}
    </div>
  );
}

export default App;