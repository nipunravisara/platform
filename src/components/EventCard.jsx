import React from 'react';
import Icon from './Icon';

export default function EventCard({ title, image, time }) {
  return (
    <div className="flex flex-col p-1 mx-2 w-1/2 bg-white rounded-lg shadow-lg lg:flex-row lg:w-auto lg:my-1 lg:mx-0">
      <Icon icon={image} size={60} />
      <div className="flex flex-col justify-center items-start p-4 pt-0 lg:pt-4">
        <div>
          <span className="text-sm font-semibold text-gray-500 uppercase">{time}</span>
        </div>
        <div>
          <p className="font-semibold line-clamp-2 lg:line-clamp-1">{title}</p>
        </div>
      </div>
    </div>
  );
}
