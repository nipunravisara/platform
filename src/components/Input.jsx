import React from 'react';

export default function Input({ placeholder, suffix }) {
  return (
    <div className="flex max-h-12 flex-row items-center bg-gray-100 px-4 py-3 pr-1">
      <input className="bg-gray-100 outline-none" type="text" placeholder={placeholder} />
      {suffix && <div>{suffix}</div>}
    </div>
  );
}
