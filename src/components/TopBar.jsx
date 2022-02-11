import React from 'react';
import Icon from './Icon';
import Input from './Input';
import Button from './Button';
import Avatar from './Avatar';

import Logo from '../assets/Group@1,5x.svg';
import Chat from '../assets/icons/chat.png';
import Search from '../assets/icons/search.png';
import User from '../assets/images/user.png';
import Menu from '../assets/icons/menu.png';
import NotificationIcon from '../assets/icons/notification.png';

export default function TopBar() {
  return (
    <div className="p-1 flex flex-row items-center justify-between shadow-lg">
      <div className="lg:hidden">
        <Icon icon={Menu} size={25} />
      </div>
      <Icon icon={Logo} size={140} alt="platform-logo" />
      <div className="hidden lg:flex">
        <Input placeholder="Search and Find" suffix={<Icon icon={Search} size={20} />} />
      </div>
      <div className="flex flex-row items-center">
        <div className="hidden lg:block mx-7">
          <Button title="+ Add" />
        </div>

        <div className="hidden lg:flex flex-row items-center">
          <Icon icon={NotificationIcon} size={23} />
          <Icon icon={Chat} size={23} />
          <div className="hidden lg:block mx-2">Clarence Russell</div>
        </div>

        <Avatar image={User} alt="profile_picture" />
      </div>
    </div>
  );
}
