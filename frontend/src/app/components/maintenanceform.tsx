
"use client";

import React, { useState } from 'react';

interface Maintenance {
  description: string;
  date: string;
  priority: string;
  status: string;
  responsible: string;
}

interface MaintenanceFormProps {
  onAddMaintenance: (maintenance: Maintenance) => void;
}

const MaintenanceForm: React.FC<MaintenanceFormProps> = ({ onAddMaintenance }) => {
  const [maintenance, setMaintenance] = useState<Maintenance>({
    description: '',
    date: '',
    priority: '',
    status: '',
    responsible: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaintenance({
      ...maintenance,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMaintenance(maintenance);
    setMaintenance({
      description: '',
      date: '',
      priority: '',
      status: '',
      responsible: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium">Description</label>
        <input
          type="text"
          name="description"
          value={maintenance.description}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          name="date"
          value={maintenance.date}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Priority</label>
        <input
          type="text"
          name="priority"
          value={maintenance.priority}
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
          value={maintenance.status}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Responsible</label>
        <input
          type="text"
          name="responsible"
          value={maintenance.responsible}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Maintenance
      </button>
    </form>
  );
};

export default MaintenanceForm;
