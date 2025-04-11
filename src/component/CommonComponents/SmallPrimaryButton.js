import React from 'react'

const SmallPrimaryButton = ({ content, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-gradient-to-b from-purple-600 to-purple-500 text-white px-6 py-1 rounded-lg text-lg font-medium hover:from-purple-700 hover:to-purple-600 transition-all duration-300"
    >
      {content}
    </button>
  );
}

export default SmallPrimaryButton