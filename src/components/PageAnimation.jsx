import React from 'react';

export default function PageAnimation({ children }) {
  return (
    <div
      style={{
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      {children}
    </div>
  );
} 