// src/app/users/page.tsx
"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import UserForm from '../components/useform';

interface User {
  username: string;
  role: string;
  email: string;
}

const initialUsers: User[] = [
  { username: 'johndoe', role: 'Admin', email: 'johndoe@example.com' },
  
];

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleAddUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6 ml-64"> 
          <h1 className="text-4xl font-bold mb-4">Users</h1>
          <UserForm onAddUser={handleAddUser} />
          <Table
            headers={['Username', 'Role', 'Email']}
            data={users}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default UserPage;
