import React from 'react'

const SecondaryButton = ({ content, onClick, type = "button", disabled = false }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="bg-transparent text-neutral-500 px-12 py-4 rounded-2xl text-lg font-medium transition-all duration-300 border-[0.12rem] border-neutral-500"
      >
        {content}
      </button>
    );
}

export default SecondaryButton