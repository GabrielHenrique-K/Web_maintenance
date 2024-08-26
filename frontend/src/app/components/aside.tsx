// src/app/components/Aside.tsx
"use client";

import React from "react";
import Link from "next/link";

const Aside: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/machines" className="text-lg hover:text-blue-400">Máquinas</Link>
          </li>
          <li>
            <Link href="/maintenances" className="text-lg hover:text-blue-400">Manutenções</Link>
          </li>
          <li>
            <Link href="/inventory" className="text-lg hover:text-blue-400">Estoque</Link>
          </li>
          <li>
            <Link href="/teams" className="text-lg hover:text-blue-400">Equipes</Link>
          </li>
          <li>
            <Link href="/users" className="text-lg hover:text-blue-400">Usuários</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <Link href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Home
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
