import React from 'react';

export default function Button({ title }) {
  return (
    <button
      type="button"
      className="flex items-center p-6 max-h-12 text-white rounded-2xl bg-primary hover:bg-primary-action">
      <p className="font-semibold">{title}</p>
    </button>
  );
}
