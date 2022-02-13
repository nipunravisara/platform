import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <div className="flex h-screen">
        <SideBar />
        <main className="flex-1 p-10 bg-background lg:pl-32 lg:pt-24">{children}</main>
      </div>
    </>
  );
}
