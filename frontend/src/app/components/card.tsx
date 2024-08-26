// Adicione "use client" se o componente usar hooks
"use client";

import React from "react";

interface CardProps {
  color: string;
  qty: string;
  text: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ color, qty, text, icon }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">{icon}</div>
          <div className="text-xl font-bold">{qty}</div>
        </div>
        <div className="text-lg">{text}</div>
      </div>
    </div>
  );
};

export default Card;