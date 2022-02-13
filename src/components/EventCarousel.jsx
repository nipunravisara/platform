import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowLeft from '../assets/icons/arrow-left.png';
import ArrowRight from '../assets/icons/arrow-right.png';
import IconButton from './IconButton';

const events = [
  {
    title: 'Youth talent & education',
    subject: 'science',
    date: 'May, 20'
  },
  {
    title: 'Computer science',
    subject: 'Technology',
    date: 'Jun, 12'
  }
];

export default function EventCarousel() {
  return (
    <Carousel showArrows={false} onChange={() => {}} onClickItem={() => {}} onClickThumb={() => {}}>
      {events.map(({ title, subject, date }) => (
        <div key={title + date}>
          <div className="px-8 py-7 bg-no-repeat bg-cover rounded-xl bg-carousel-background">
            <div className="float-right py-1 text-xs font-semibold text-white uppercase rounded-xl bg-primary w-fit">
              <span className="px-4">{subject}</span>
            </div>
            <div className="py-16">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col text-left lg:items-center lg:flex-row-reverse">
                  <p className="max-w-sm text-3xl font-semibold text-white capitalize lg:pl-6">
                    {title}
                  </p>
                  <div className="mt-4 lg:mt-0 w-fit">
                    <IconButton icon={ArrowLeft} />
                  </div>
                </div>
                <div className="flex flex-col items-end text-right lg:items-center lg:flex-row">
                  <p className="text-3xl font-semibold text-white capitalize lg:pr-6">{date}</p>
                  <div className="mt-4 lg:mt-0 w-fit">
                    <IconButton icon={ArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
