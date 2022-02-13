import React from 'react';

export default function StatisticCard({ title, value, highligted }) {
  return (
    <div
      className={`flex flex-row justify-between items-center p-6 rounded  ${
        highligted ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-white shadow-xl'
      }`}>
      <div>
        <h5
          className={`p-0 m-0 text-xl font-semibold  ${
            highligted ? 'text-white' : 'text-gray-400'
          }`}>
          {title.split(' ')[0]}
        </h5>
        <h5
          className={`p-0 m-0 -mt-2 text-xl font-semibold text-gray-400 ${
            highligted ? 'text-white' : 'text-gray-400'
          }`}>
          {title.split(' ')[1]}
        </h5>
      </div>
      <h4 className={`text-3xl font-semibold ${highligted ? 'text-white' : 'text-black'} `}>
        {value}
      </h4>
    </div>
  );
}
