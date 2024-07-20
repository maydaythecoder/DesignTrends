import React from 'react';

const NeumorphicPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-6 max-w-sm mx-auto bg-gray-200 rounded-lg shadow-neumorphic">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Neumorphic Design</h1>
        <button className="w-full py-2 px-4 rounded-lg shadow-neumorphic-button bg-gray-200 text-gray-700 font-semibold">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default NeumorphicPage;
