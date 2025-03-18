import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => onProductClick(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-green-600 font-medium">
              Rp {product.price.toLocaleString()}
            </p>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}