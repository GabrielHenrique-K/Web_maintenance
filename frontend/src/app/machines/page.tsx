// src/app/machines/page.tsx
"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import MachineForm from '../components/machineform';

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
  
];

const MachinePage: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>(initialMachines);

  const handleAddMachine = (machine: Machine) => {
    setMachines([...machines, machine]);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6 ml-64"> 
          <h1 className="text-4xl font-bold mb-4">Machines</h1>
          <MachineForm onAddMachine={handleAddMachine} />
          <Table
            headers={['Name', 'Type', 'Model', 'Manufacture Date', 'Serial Number', 'Location', 'Maintenance History']}
            data={machines}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MachinePage;
