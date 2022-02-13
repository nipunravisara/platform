import React from 'react';
import Icon from './Icon';
import Input from './Input';
import Button from './Button';
import Avatar from './Avatar';

import Logo from '../assets/platform-logo.svg';
import Chat from '../assets/icons/chat.png';
import Search from '../assets/icons/search.png';
import User from '../assets/images/user.png';
import Menu from '../assets/icons/menu.png';
import NotificationIcon from '../assets/icons/notification.png';

export default function TopBar() {
  return (
    <div className="flex fixed z-40 flex-row justify-between items-center p-1 w-full bg-white shadow-lg">
      <div className="lg:hidden">
        <Icon icon={Menu} size={25} />
      </div>
      <Icon icon={Logo} size={140} alt="platform-logo" />
      <div className="hidden lg:flex">
        <Input placeholder="Search and Find" suffix={<Icon icon={Search} size={20} />} />
      </div>
      <div className="flex flex-row items-center">
        <div className="hidden mx-7 lg:block">
          <Button title="+ ADD" />
        </div>

        <div className="hidden flex-row items-center lg:flex">
          <Icon icon={NotificationIcon} size={23} />
          <Icon icon={Chat} size={23} />
          <div className="hidden mx-2 lg:block">Clarence Russell</div>
        </div>

        <Avatar image={User} alt="profile_picture" />
      </div>
    </div>
  );
}
