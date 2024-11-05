import React from 'react';

const ChevronDown = ({ className = 'w-4 h-4', strokeWidth = '1.5' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5" 
      stroke="currentColor"
      className="self-center ml-2 size-3"
    >
      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  );
};

export default ChevronDown;
