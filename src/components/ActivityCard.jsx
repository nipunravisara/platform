import React, { useState } from 'react';
import Icon from './Icon';

import Assignment from '../assets/icons/assignments.png';
import Event from '../assets/icons/events.png';
import Followers from '../assets/icons/followers.png';
import ArrowRight from '../assets/icons/arrow-menu-right.png';
import ArrowDown from '../assets/icons/arrow-down.png';

export default function ActivityCard({ type, content, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = (actionType) => {
    switch (actionType) {
      case 'followers':
        return Followers;
      case 'events':
        return Event;
      default:
        return Assignment;
    }
  };
  return (
    <div
      aria-hidden
      onClick={() => setIsExpanded(!isExpanded)}
      className={`px-4  mb-3 bg-white shadow-lg hover:shadow-2xl ${isExpanded ? 'py-4' : 'py-1'}`}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Icon icon={getIcon(type)} size={40} />
          <p className="flex flex-row" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <Icon icon={isExpanded ? ArrowDown : ArrowRight} size={15} />
      </div>
      <p className={`px-16 py-4 text-text-secondary ${!isExpanded && 'hidden'}`}> {description}</p>
    </div>
  );
}
