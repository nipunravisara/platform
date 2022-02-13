import React from 'react';

export default function Title({ title, divider, type, suffix }) {
  const getTitleStyles = (titleType) => {
    switch (titleType) {
      case 'secondary':
        return 'font-semibold text-2xl';
      case 'ternary':
        return 'font-semibold text-sm uppercase tracking-wider';
      default:
        return 'font-semibold text-3xl';
    }
  };

  return (
    <div className="flex relative items-center mb-10">
      <span className={`text-text-secondary ${getTitleStyles(type)}`}>{title}</span>
      <div
        className={`flex-grow mx-3 border-t ${divider ? 'border-gray-200' : 'border-transparent'}`}
      />
      {suffix}
    </div>
  );
}
