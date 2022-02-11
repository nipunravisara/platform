import React from 'react';

export default function Icon({ icon, size, alt }) {
  return (
    <div className="p-3 flex items-center">
      <img src={icon} alt={alt || ''} width={size || 15} height={size || 15} />
    </div>
  );
}
