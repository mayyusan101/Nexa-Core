import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="py-1 border-none outline-none rounded px-2 md:py-2 md:px-4 bg-blue-600 hover:bg-blue-500 text-white text-base">
      {children}
    </button>
  );
};
