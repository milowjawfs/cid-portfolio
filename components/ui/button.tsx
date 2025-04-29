"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
};

export const Button = ({ children, onClick, variant = "default" }: ButtonProps) => {
  const base = "px-4 py-2 rounded-md font-medium inline-flex items-center transition";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};
