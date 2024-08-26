// src/app/teams/page.tsx
"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import TeamForm from '../components/teamform';

interface Team {
  name: string;
  members: string;
  specialty: string;
}

const initialTeams: Team[] = [
  { name: 'Maintenance Team A', members: 'Alice, Bob', specialty: 'Electrical' },
  
];

const TeamPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const handleAddTeam = (team: Team) => {
    setTeams([...teams, team]);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 flex flex-col p-6 ml-64"> 
          <h1 className="text-4xl font-bold mb-4">Teams</h1>
          <TeamForm onAddTeam={handleAddTeam} />
          <Table
            headers={['Name', 'Members', 'Specialty']}
            data={teams}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
