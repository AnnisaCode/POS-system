import React from 'react';
import { Transaction } from '../types';

interface ReceiptProps {
  transaction: Transaction;
  onClose: () => void;
}

export function Receipt({ transaction, onClose }: ReceiptProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="text-gray-600">Transaction Complete</p>
        </div>

        <div className="border-t border-b py-4 mb-4">
          <div className="text-sm text-gray-600 mb-2">
            Transaction ID: {transaction.id}
          </div>
          <div className="text-sm text-gray-600">
            Date: {transaction.date.toLocaleString()}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {transaction.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>Rp {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rp {transaction.total.toLocaleString()}</span>
          </div>
          {transaction.paymentMethod === 'cash' && (
            <>
              <div className="flex justify-between">
                <span>Cash</span>
                <span>Rp {transaction.cash?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Change</span>
                <span>Rp {transaction.change?.toLocaleString()}</span>
              </div>
            </>
          )}
          <div className="flex justify-between text-sm text-gray-600">
            <span>Payment Method</span>
            <span className="capitalize">{transaction.paymentMethod}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}