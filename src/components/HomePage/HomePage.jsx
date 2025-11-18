import React from 'react';
import Body from '../Body/Body';
import Cards from '../Cards/Cards';
import {GiftCards} from '../Cards/GiftCards';
import {HostingSection} from '../HostingSection/HostingSection';
import { FutureGetaway } from '../FutureGetaways/FutureGetaway';

const HomePage = () => {
  return (
    <>
      <Body />
      <Cards />
      <GiftCards />
      <HostingSection />
      <FutureGetaway />
    </>
  );
};

export default HomePage;