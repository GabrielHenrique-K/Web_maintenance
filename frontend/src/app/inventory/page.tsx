"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import InventoryForm from '../components/inventoryform';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface InventoryItem {
  name: string;
  code: string;
  supplier: string;
  quantity: number;
  unitValue: number;
}

const initialInventory: InventoryItem[] = [
  { name: 'Gearbox', code: 'G123', supplier: 'Supplier A', quantity: 50, unitValue: 200 },
  { name: 'Screwdriver', code: 'SD001', supplier: 'Supplier B', quantity: 30, unitValue: 10 },
];

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);

  const handleAddItem = (item: InventoryItem) => {
    setInventory([...inventory, item]);
  };


  const chartData = {
    labels: inventory.map(item => item.name),
    datasets: [
      {
        label: 'Quantity',
        data: inventory.map(item => item.quantity),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 p-6 lg:ml-64">
          <header className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Inventory Management</h1>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <InventoryForm onAddItem={handleAddItem} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Inventory Overview</h2>
              <div className="w-full h-64">
                <Pie data={chartData} />
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
            <Table
              headers={['Name', 'Code', 'Supplier', 'Quantity', 'Unit Value']}
              data={inventory}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default InventoryPage;
