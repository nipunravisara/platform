import React from 'react';
import BannerAvatar from '../assets/images/banner-avatar.png';

export default function Banner() {
  return (
    <div className="flex flex-col items-center mb-12 max-h-72 bg-no-repeat bg-cover rounded-xl lg:bg-right-bottom lg:flex-row bg-banner-background">
      <img className="-mt-16" src={BannerAvatar} alt="welcome-awatar" width={210} />
      <div className="py-7 text-center lg:text-left lg:ml-6">
        <h4 className="text-2xl font-semibold text-white">Welcome back, Clarence</h4>
        <span className="text-white">Ta-da! You&apos;re up-to date. 🥳</span>
      </div>
    </div>
  );
}
