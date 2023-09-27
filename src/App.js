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
      
        <LandingPages /> 
        <CardList />      
        <DestinationCard />
       <TwoColumnGrid />
       <GridComponent/>
        <SubscribeComponent/>
        <Footer/>
      
    </>

  );
};

export default App;
