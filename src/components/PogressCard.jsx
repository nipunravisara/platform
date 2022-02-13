import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function PogressCard() {
  return (
    <div className="p-4 font-semibold text-center bg-blue-900 rounded-lg shadow-2xl">
      <h4 className="text-2xl text-white">Pogress overview</h4>
      <div className="flex relative justify-center items-center px-20 py-12">
        <PieChart
          lineWidth={15}
          data={[
            { title: 'One', value: 10, color: '#fed200' },
            { title: 'Two', value: 15, color: '#ff794f' }
          ]}
        />
        <h4 className="absolute text-2xl text-white">40%</h4>
      </div>

      <div className="flex overflow-hidden flex-wrap p-3 bg-white bg-opacity-5 rounded-xl divide-x divide-stone-50">
        <div className="overflow-hidden w-1/2">
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center">
              <div className="mr-2 w-3 h-3 bg-yellow-500 rounded-lg" />
              <p className="text-sm font-normal text-white">Completed</p>
            </div>
            <div className="flex flex-row items-end mt-1">
              <h4 className="text-4xl text-white">20</h4>
              <h4 className="ml-2 text-lg text-white">hours</h4>
            </div>
          </div>
        </div>

        <div className="overflow-hidden px-5 w-1/2">
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center">
              <div className="mr-2 w-3 h-3 bg-orange-400 rounded-lg" />
              <p className="text-xs font-normal text-white">Left to go</p>
            </div>
            <div className="flex flex-row items-end mt-1">
              <h4 className="text-4xl text-white">30</h4>
              <h4 className="ml-2 text-lg text-white">hours</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
