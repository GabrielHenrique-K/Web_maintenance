
"use client";

import React, { useState } from 'react';

interface Machine {
  name: string;
  code: string;
  type: string;
  status: string;
  location: string;
}

interface MachineFormProps {
  onAddMachine: (machine: Machine) => void;
}

const MachineForm: React.FC<MachineFormProps> = ({ onAddMachine }) => {
  const [machine, setMachine] = useState<Machine>({
    name: '',
    code: '',
    type: '',
    status: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMachine(prevMachine => ({
      ...prevMachine,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMachine(machine);
    setMachine({
      name: '',
      code: '',
      type: '',
      status: '',
      location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {/* Form Fields */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={machine.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Code</label>
        <input
          type="text"
          name="code"
          value={machine.code}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Type</label>
        <input
          type="text"
          name="type"
          value={machine.type}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Status</label>
        <input
          type="text"
          name="status"
          value={machine.status}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={machine.location}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Machine
      </button>
    </form>
  );
};

export default MachineForm;
