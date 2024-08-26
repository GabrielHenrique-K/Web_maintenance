import React from 'react';
import { FaBuilding, FaUsers, FaTools, FaChartBar, FaChartPie } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdForklift } from 'react-icons/md';
import Aside from './components/aside';
import Footer from './components/footer';
import Card from './components/card';
import Table from './components/Table';
import Chart from './components/Charts';

const cards = [
  { color: 'bg-gradient-to-r from-orange-400 to-orange-200', qty: '100', text: 'Ambientes', icon: <FaBuilding size={48} className="text-white" /> },
  { color: 'bg-gradient-to-r from-blue-400 to-blue-200', qty: '150', text: 'Equipamentos', icon: <MdForklift size={48} className="text-white" /> },
  { color: 'bg-gradient-to-r from-red-400 to-red-200', qty: '25', text: 'O.S. Abertas', icon: <GrNotes size={48} className="text-white" /> },
  { color: 'bg-gradient-to-r from-green-400 to-green-200', qty: '75', text: 'O.S. Concluídas', icon: <IoMdCheckboxOutline size={48} className="text-white" /> },
];

const pageData = {
  machines: [
    { name: 'Lathe', type: 'CNC', model: 'X1', manufactureDate: '2020-05-10', serialNumber: 'L123', location: 'Shop Floor', maintenanceHistory: 'Regular' },
  ],
  users: [
    { username: 'john_doe', email: 'john.doe@example.com', role: 'Admin' },
  ],
  inventory: [
    { name: 'Screwdriver', code: 'SD001', supplier: 'ToolCo', quantity: 50, unitValue: 5 },
  ],
  teams: [
    { name: 'Team A', members: 'Alice, Bob', specialty: 'Mechanical' },
  ],
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6">
          <h1 className="text-4xl font-bold uppercase mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {cards.map((props) => (
              <Card key={props.text} color={props.color} qty={props.qty} text={props.text} icon={props.icon} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Estatísticas de Equipamentos</h2>
              <Chart type="bar" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Status das Manutenções</h2>
              <Chart type="pie" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Máquinas</h2>
              <Table
                headers={['Name', 'Type', 'Model', 'Manufacture Date', 'Serial Number', 'Location', 'Maintenance History']}
                data={pageData.machines}
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Usuários</h2>
              <Table
                headers={['Username', 'Email', 'Role']}
                data={pageData.users}
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Inventário</h2>
              <Table
                headers={['Name', 'Code', 'Supplier', 'Quantity', 'Unit Value']}
                data={pageData.inventory}
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Equipes</h2>
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
