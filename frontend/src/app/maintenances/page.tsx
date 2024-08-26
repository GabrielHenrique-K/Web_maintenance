// src/app/maintenances/page.tsx
"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import MaintenanceForm from '../components/maintenanceform';

interface Maintenance {
  description: string;
  date: string;
  priority: string;
  status: string;
  responsible: string;
}

const initialMaintenances: Maintenance[] = [
  { description: 'Replace filter', date: '2024-08-01', priority: 'High', status: 'Pending', responsible: 'John Doe' },
  
];

const MaintenancePage: React.FC = () => {
  const [maintenances, setMaintenances] = useState<Maintenance[]>(initialMaintenances);

  const handleAddMaintenance = (maintenance: Maintenance) => {
    setMaintenances([...maintenances, maintenance]);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6 ml-64"> 
          <h1 className="text-4xl font-bold mb-4">Maintenances</h1>
          <MaintenanceForm onAddMaintenance={handleAddMaintenance} />
          <Table
            headers={['Description', 'Date', 'Priority', 'Status', 'Responsible']}
            data={maintenances}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MaintenancePage;
