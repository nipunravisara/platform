import React, { useState } from 'react';
import Icon from './Icon';

import Home from '../assets/icons/home.png';
import Categories from '../assets/icons/categories.png';
import Docs from '../assets/icons/docs.png';
import Stats from '../assets/icons/stats.png';
import Messages from '../assets/icons/messages.png';

import HomeHighlighted from '../assets/icons/home-highlighted.png';
import CategoriesHighlighted from '../assets/icons/categories-highlighted.png';
import DocsHighlighted from '../assets/icons/docs-highlighted.png';
import StatsHighlighted from '../assets/icons/stats-highlighted.png';
import MessagesHighlighted from '../assets/icons/messages-highlighted.png';

export default function SideBar() {
  const [currentPath, setCurrentPath] = useState('/');

  const [paths] = useState([
    {
      icon: Home,
      selectedIcon: HomeHighlighted,
      path: '/'
    },
    {
      icon: Categories,
      selectedIcon: CategoriesHighlighted,
      path: '/categories'
    },
    {
      icon: Docs,
      selectedIcon: DocsHighlighted,
      path: '/docs'
    },
    {
      icon: Stats,
      selectedIcon: StatsHighlighted,
      path: '/stats'
    },
    {
      icon: Messages,
      selectedIcon: MessagesHighlighted,
      path: '/messages'
    }
  ]);

  return (
    <div className="hidden flex-col justify-start items-center w-16 h-screen lg:flex bg-primary">
      {paths.map(({ icon, selectedIcon, path }) => {
        return (
          <div
            key={path}
            aria-hidden
            className={`p-2 hover:bg-primary-action ${
              currentPath === path ? 'bg-primary-action' : ''
            }`}
            onClick={() => setCurrentPath(path)}>
            <Icon icon={currentPath === path ? selectedIcon : icon} size={20} />
          </div>
        );
      })}
    </div>
  );
}
