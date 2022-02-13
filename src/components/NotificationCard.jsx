import React from 'react';

export default function NotificationCard({ message }) {
  return (
    <div className="p-6 pl-12 mt-12 bg-center bg-no-repeat bg-cover bg-notification-background">
      <p className="ml-12 font-semibold text-white">{message}</p>
    </div>
  );
}
