import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdForklift } from 'react-icons/md';
import Aside from './components/aside';
import Footer from './components/footer';
import Card from './components/card';
import Table from './components/Table';
import Chart from './components/Charts';

const cards = [
  { color: 'bg-orange-200', qty: '100', text: 'Ambientes', icon: <FaBuilding size={48} /> },
  { color: 'bg-blue-200', qty: '100', text: 'Equipamentos', icon: <MdForklift size={48} /> },
  { color: 'bg-red-200', qty: '100', text: 'O.S. Abertas', icon: <GrNotes size={48} /> },
  { color: 'bg-green-200', qty: '100', text: 'O.S. Concluídas', icon: <IoMdCheckboxOutline size={48} /> },
];

const pageData = {
  machines: [
    { name: 'Lathe', type: 'CNC', model: 'X1', manufactureDate: '2020-05-10', serialNumber: 'L123', location: 'Shop Floor', maintenanceHistory: 'Regular' },
    // Add more machine data here
  ],
  users: [
    { username: 'john_doe', email: 'john.doe@example.com', role: 'Admin' },
    // Add more user data here
  ],
  inventory: [
    { name: 'Screwdriver', code: 'SD001', supplier: 'ToolCo', quantity: 50, unitValue: 5 },
    // Add more inventory data here
  ],
  teams: [
    { name: 'Team A', members: 'Alice, Bob', specialty: 'Mechanical' },
    // Add more team data here
  ],
};

const HomePage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6 ml-64">
          <h1 className="text-4xl font-bold uppercase mb-6 bg-white/40 p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {cards.map((props) => (
              <Card key={props.text} color={props.color} qty={props.qty} text={props.text} icon={props.icon} />
            ))}
          </div>

          <div className="mb-6">
            <Chart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Machines</h2>
              <Table
                headers={['Name', 'Type', 'Model', 'Manufacture Date', 'Serial Number', 'Location', 'Maintenance History']}
                data={pageData.machines}
              />
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Users</h2>
              <Table
                headers={['Username', 'Email', 'Role']}
                data={pageData.users}
              />
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Inventory</h2>
              <Table
                headers={['Name', 'Code', 'Supplier', 'Quantity', 'Unit Value']}
                data={pageData.inventory}
              />
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Teams</h2>
              <Table
                headers={['Name', 'Members', 'Specialty']}
                data={pageData.teams}
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
