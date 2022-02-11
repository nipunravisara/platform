import React from 'react';

export default function Button({ title }) {
  return (
    <button
      type="button"
      className=" flex items-center p-6 max-h-12 rounded-2xl text-white bg-primary hover:bg-primary-action">
      <p className="font-medium">{title}</p>
    </button>
  );
}
