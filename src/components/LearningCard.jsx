import React from 'react';
import Flag from '../assets/images/flag.png';

export default function LearningCard() {
  return (
    <div className="px-6 py-4 text-center shadow-lg">
      <span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
        Current Learning
      </span>
      <div className="flex flex-row items-center">
        <img src={Flag} width={20} height={20} alt="flag" />
        <h5 className="ml-2 text-xl font-semibold">English</h5>
      </div>
    </div>
  );
}
