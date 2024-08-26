// src/app/components/Table.tsx
"use client";  

import React from 'react';

interface TableProps {
  headers: string[];
  data: any[]; 
}

const Table: React.FC<TableProps> = ({ headers, data }) => {

  const renderRow = (item: any, index: number) => {
    return headers.map((header, headerIndex) => (
      <td key={headerIndex} className="border px-4 py-2">
        {item[header.toLowerCase().replace(/\s+/g, '')] || 'N/A'}
      </td>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-2 bg-gray-200 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {renderRow(item, index)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-4">
                Nenhum dado disponível
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
