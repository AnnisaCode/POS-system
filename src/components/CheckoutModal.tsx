import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CartItem, Transaction } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onComplete: (transaction: Transaction) => void;
}

export function CheckoutModal({ isOpen, onClose, items, onComplete }: CheckoutModalProps) {
  const [cash, setCash] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('cash');

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cashAmount = parseFloat(cash) || 0;
  const change = cashAmount - total;

  const handleComplete = () => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      items,
      total,
      date: new Date(),
      paymentMethod,
      cash: paymentMethod === 'cash' ? cashAmount : undefined,
      change: paymentMethod === 'cash' ? change : undefined,
    };
    onComplete(transaction);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="qris">QRIS</option>
            </select>
          </div>

          {paymentMethod === 'cash' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cash Amount
              </label>
              <input
                type="number"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Enter cash amount"
              />
            </div>
          )}

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Total:</span>
              <span className="font-bold">Rp {total.toLocaleString()}</span>
            </div>
            {paymentMethod === 'cash' && (
              <>
                <div className="flex justify-between mb-2">
                  <span>Cash:</span>
                  <span>Rp {cashAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Change:</span>
                  <span className={change < 0 ? 'text-red-500' : 'text-green-500'}>
                    Rp {change.toLocaleString()}
                  </span>
                </div>
              </>
            )}
          </div>

          <button
            onClick={handleComplete}
            disabled={
              (paymentMethod === 'cash' && change < 0) ||
              (paymentMethod === 'cash' && !cash)
            }
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Complete Transaction
          </button>
        </div>
      </div>
    </div>
  );
}