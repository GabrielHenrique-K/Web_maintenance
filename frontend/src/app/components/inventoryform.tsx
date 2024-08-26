
"use client";

import React, { useState } from 'react';

interface InventoryItem {
  name: string;
  code: string;
  supplier: string;
  quantity: number;
  unitValue: number;
}

interface InventoryFormProps {
  onAddItem: (item: InventoryItem) => void;
}

const InventoryForm: React.FC<InventoryFormProps> = ({ onAddItem }) => {
  const [item, setItem] = useState<InventoryItem>({
    name: '',
    code: '',
    supplier: '',
    quantity: 0,
    unitValue: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: name === 'quantity' || name === 'unitValue' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem(item);
    setItem({
      name: '',
      code: '',
      supplier: '',
      quantity: 0,
      unitValue: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {/* Form Fields */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Code</label>
        <input
          type="text"
          name="code"
          value={item.code}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Supplier</label>
        <input
          type="text"
          name="supplier"
          value={item.supplier}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Unit Value</label>
        <input
          type="number"
          name="unitValue"
          value={item.unitValue}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default InventoryForm;
