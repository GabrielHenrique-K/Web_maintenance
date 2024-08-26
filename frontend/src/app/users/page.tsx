"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import UserForm from '../components/useform';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface User {
  username: string;
  role: string;
  email: string;
}

const initialUsers: User[] = [
  { username: 'johndoe', role: 'Admin', email: 'johndoe@example.com' },
  { username: 'janedoe', role: 'User', email: 'janedoe@example.com' },
  
];

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleAddUser = (user: User) => {
    setUsers([...users, user]);
  };

  
  const roleCounts = users.reduce((acc: Record<string, number>, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: 'User Role Distribution',
        data: Object.values(roleCounts),
        backgroundColor: '#4BC0C0',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 p-4 lg:p-6 lg:ml-64">
          <header className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">User Management</h1>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New User</h2>
              <UserForm onAddUser={handleAddUser} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Role Distribution</h2>
              <div className="w-full h-64 lg:h-80">
                <Bar data={chartData} />
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">User List</h2>
            <Table
              headers={['Username', 'Role', 'Email']}
              data={users}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default UserPage;
