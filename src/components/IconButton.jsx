import React from 'react';

export default function IconButton({ icon }) {
  return (
    <div className="px-4 py-1 text-center bg-white rounded min-w-fit w-fit">
      <img src={icon} alt="icon" className="h-4" style={{ verticalAlign: 'middle' }} />
    </div>
  );
}
