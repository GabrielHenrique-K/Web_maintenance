"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import MaintenanceForm from '../components/maintenanceform';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Configuração do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

interface Maintenance {
  description: string;
  date: string;
  priority: string;
  status: string;
  responsible: string;
}

const initialMaintenances: Maintenance[] = [
  { description: 'Replace filter', date: '2024-08-01', priority: 'High', status: 'Pending', responsible: 'John Doe' },
  // Adicione mais manutenções conforme necessário
];

const MaintenancePage: React.FC = () => {
  const [maintenances, setMaintenances] = useState<Maintenance[]>(initialMaintenances);

  const handleAddMaintenance = (maintenance: Maintenance) => {
    setMaintenances([...maintenances, maintenance]);
  };

  // Dados para o gráfico
  const chartData = {
    labels: ['High Priority', 'Medium Priority', 'Low Priority'],
    datasets: [
      {
        label: 'Priority Distribution',
        data: [
          maintenances.filter(m => m.priority === 'High').length,
          maintenances.filter(m => m.priority === 'Medium').length,
          maintenances.filter(m => m.priority === 'Low').length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 p-4 lg:p-6 lg:ml-64">
          <header className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Maintenance Management</h1>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Maintenance</h2>
              <MaintenanceForm onAddMaintenance={handleAddMaintenance} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Priority Distribution</h2>
              <div className="w-full h-64 lg:h-80">
                <Pie data={chartData} />
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Maintenance List</h2>
            <Table
              headers={['Description', 'Date', 'Priority', 'Status', 'Responsible']}
              data={maintenances}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MaintenancePage;
