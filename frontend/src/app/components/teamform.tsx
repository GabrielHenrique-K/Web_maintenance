// src/app/components/TeamForm.tsx
"use client";

import React, { useState } from 'react';

interface Team {
  name: string;
  members: string;
  specialty: string;
}

interface TeamFormProps {
  onAddTeam: (team: Team) => void;
}

const TeamForm: React.FC<TeamFormProps> = ({ onAddTeam }) => {
  const [team, setTeam] = useState<Team>({ name: '', members: '', specialty: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTeam(team);
    setTeam({ name: '', members: '', specialty: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium">Team Name</label>
        <input
          type="text"
          name="name"
          value={team.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Members</label>
        <input
          type="text"
          name="members"
          value={team.members}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Specialty</label>
        <input
          type="text"
          name="specialty"
          value={team.specialty}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Team
      </button>
    </form>
  );
};

export default TeamForm;
