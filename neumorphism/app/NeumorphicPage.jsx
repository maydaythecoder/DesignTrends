"use client"
import React, { useState } from 'react';

const NeumorphicPage = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-6 max-w-sm mx-auto bg-gray-200 rounded-lg shadow-neumorphic">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Neumorphic Design</h1>
        <button
          onClick={handleButtonClick}
          className={`w-full py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold focus:outline-none transition-shadow duration-300 ease-in-out ${
            isPressed ? 'shadow-neumorphic-button-pressed' : 'shadow-neumorphic-button'
          }`}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default NeumorphicPage;

