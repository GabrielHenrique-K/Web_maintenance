"use client";

import React, { useState } from 'react';
import Aside from '../components/aside';
import Footer from '../components/footer';
import Table from '../components/Table';
import TeamForm from '../components/teamform';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

interface Team {
  name: string;
  members: string;
  specialty: string;
}

const initialTeams: Team[] = [
  { name: 'Maintenance Team A', members: 'Alice, Bob', specialty: 'Electrical' },
  { name: 'Maintenance Team B', members: 'Charlie, Dave', specialty: 'Mechanical' },
 
];

const TeamPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const handleAddTeam = (team: Team) => {
    setTeams([...teams, team]);
  };


  const specialtyCounts = teams.reduce((acc: Record<string, number>, team) => {
    acc[team.specialty] = (acc[team.specialty] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(specialtyCounts),
    datasets: [
      {
        label: 'Team Specialty Distribution',
        data: Object.values(specialtyCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1 p-4 lg:p-6 lg:ml-64">
          <header className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Team Management</h1>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Team</h2>
              <TeamForm onAddTeam={handleAddTeam} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Specialty Distribution</h2>
              <div className="w-full h-64 lg:h-80">
                <Pie data={chartData} />
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Team List</h2>
            <Table
              headers={['Name', 'Members', 'Specialty']}
              data={teams}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
