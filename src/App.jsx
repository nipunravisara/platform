import Banner from './components/Banner';
import EventCarousel from './components/EventCarousel';
import Layout from './components/Layout';
import LearningCard from './components/LearningCard';
import Title from './components/Title';

import EventAvatar from './assets/images/event-avatar.png';
import EventCard from './components/EventCard';
import ActivityCard from './components/ActivityCard';
import PogressCard from './components/PogressCard';
import StatisticCard from './components/StatisticCard';
import NotificationCard from './components/NotificationCard';

const todayEvents = [
  {
    image: EventAvatar,
    title: 'Wabinar: The basics of programming',
    time: '10:30AM'
  },
  {
    image: EventAvatar,
    title: 'Team building activity 🔥',
    time: '2:15PM'
  },
  {
    image: EventAvatar,
    title: 'Wabinar: The basics of programming',
    time: '10:30AM'
  }
];

const actions = [
  {
    type: 'followers',
    content: `<p class="flex flex-row text-gray-400">
    You have new 5 followers including
    <p class="mx-2 font-semibold whitespace-nowrap cursor-pointer text-primary">Kathryn Crowford</p> and
    <p class="mx-2 font-semibold whitespace-nowrap cursor-pointer text-primary">Piper shaw</p>
  </p>`,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    type: 'events',
    content: `<p class="flex flex-row text-gray-400">3 events were added to your calendar.</p>`,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    type: 'assignments',
    content: `<p class="flex flex-row text-gray-400">You have 3 pending readings to complete 🤓.</p>`,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
];

function App() {
  return (
    <Layout>
      <Title title="Dashboard" suffix={<LearningCard />} />
      <Banner />
      <Title title="Event" />
      <div className="flex overflow-hidden flex-wrap items-stretch mb-6">
        <div className="overflow-hidden w-full lg:my-px lg:w-2/3">
          <EventCarousel />
        </div>

        <div className="overflow-hidden w-full lg:my-px lg:px-8 lg:w-1/3">
          <Title title="Events today" divider type="ternary" />
          <div className="flex flex-row pb-4 -mt-6 lg:flex-col">
            {todayEvents.map(({ title, image, time }) => (
              <EventCard key={title} title={title} image={image} time={time} />
            ))}
          </div>
        </div>
      </div>
      <Title title="Activity" divider />
      <div className="mb-12">
        {actions.map(({ type, content, description }) => (
          <ActivityCard key={content} type={type} content={content} description={description} />
        ))}
      </div>

      <div className="flex overflow-hidden flex-wrap items-stretch mb-6">
        <div className="overflow-hidden w-full lg:pr-24 lg:w-1/3">
          <PogressCard />
        </div>

        <div className="overflow-hidden mt-12 w-full 777777lg:my-px lg:w-2/3 lg:mt-0">
          <Title title="Pogress" divider />
          <div className="grid grid-cols-2 gap-2 p-2 lg:grid-cols-3 lg:gap-4">
            <StatisticCard title="Total webinas" value="9" />
            <StatisticCard title="Total webinas" value="9" />
            <StatisticCard title="Total webinas" value="9" />
            <StatisticCard title="Total webinas" value="9" />
            <StatisticCard title="Total webinas" value="9" highligted />
          </div>
          <NotificationCard message="Confirm your account details. Please conform your details 😰" />
        </div>
      </div>
    </Layout>
  );
}

export default App;
