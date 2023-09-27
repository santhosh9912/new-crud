import React from 'react';
import { LandingPages } from './pages/LandingPages';
import { DestinationCard } from './components/DestinationCard';
import CardList from './components/Card';
import TwoColumnGrid from './components/TwoColumnGrid';
import GridComponent from './components/GridComponent';
import { SubscribeComponent } from './components/SubscribeComponent';
import { Footer } from './components/Footer';








const App = () => {
  return (
    <>
      <div >
        <LandingPages />
      </div>

      <div className=' pt-48'>
        <CardList />
      </div>

      <div className='pt-0'>
        <DestinationCard />
      </div>

      <div className='pt-12'>
        <TwoColumnGrid />
      </div>

      <div >
        <GridComponent/>
      </div>

      <div>
        <SubscribeComponent/>
      </div>
      <div>
        <Footer/>
      </div>


    </>

  );
};

export default App;
