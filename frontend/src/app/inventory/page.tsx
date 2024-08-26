// src/app/inventory/page.tsx
"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import InventoryForm from '../components/inventoryform';

interface InventoryItem {
  name: string;
  code: string;
  supplier: string;
  quantity: number;
  unitValue: number;
}

const initialInventory: InventoryItem[] = [
  { name: 'Gearbox', code: 'G123', supplier: 'Supplier A', quantity: 50, unitValue: 200 },
  // Adicione mais itens conforme necessário
];

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);

  const handleAddItem = (item: InventoryItem) => {
    setInventory([...inventory, item]);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6 ml-64"> 
          <h1 className="text-4xl font-bold mb-4">Inventory</h1>
          <InventoryForm onAddItem={handleAddItem} />
          <Table
            headers={['Name', 'Code', 'Supplier', 'Quantity', 'Unit Value']}
            data={inventory}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default InventoryPage;
