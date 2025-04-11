import React from 'react';

const PrimaryButton = ({ content, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-gradient-to-b from-purple-600 to-purple-500 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:from-purple-700 hover:to-purple-600 transition-all duration-300"
    >
      {content}
    </button>
  );
};

export default PrimaryButton;