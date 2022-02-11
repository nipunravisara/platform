import React from 'react';
import Icon from './Icon';
import ArrowDown from '../assets/icons/arrow-down.png';

export default function Avatar({ image, alt, size }) {
  return (
    <div className="flex flex-row items-center px-2">
      <img src={image} alt={alt || ''} width={size || 50} height={size || 50} />
      <div className="hidden lg:block">
        <Icon icon={ArrowDown} />
      </div>
    </div>
  );
}
