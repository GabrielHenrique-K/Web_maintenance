"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import MachineForm from '../components/machineform';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface Machine {
  name: string;
  type: string;
  model: string;
  manufactureDate: string;
  serialNumber: string;
  location: string;
  maintenanceHistory: string;
}

const initialMachines: Machine[] = [
  { name: 'Lathe', type: 'CNC', model: 'X1', manufactureDate: '2020-05-10', serialNumber: 'L123', location: 'Shop Floor', maintenanceHistory: 'Regular' },
  { name: 'Drill Press', type: 'Manual', model: 'DP200', manufactureDate: '2019-08-23', serialNumber: 'D456', location: 'Workshop', maintenanceHistory: 'Occasional' },

];

const MachinePage: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>(initialMachines);

  const handleAddMachine = (machine: Machine) => {
    setMachines([...machines, machine]);
  };

  
  const chartData = {
    labels: machines.map(machine => machine.name),
    datasets: [
      {
        label: 'Machines by Type',
        data: machines.map(machine => machine.type.length),
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
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
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Machine Management</h1>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <MachineForm onAddMachine={handleAddMachine} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Machine Type Distribution</h2>
              <div className="w-full h-64">
                <Bar data={chartData} />
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Machine List</h2>
            <Table
              headers={['Name', 'Type', 'Model', 'Manufacture Date', 'Serial Number', 'Location', 'Maintenance History']}
              data={machines}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MachinePage;
