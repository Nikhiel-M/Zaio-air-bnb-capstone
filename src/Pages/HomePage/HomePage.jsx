import React from 'react';
import Body from '../../components/Body/Body';
import Cards from '../../components/Cards/Cards';
import {GiftCards} from '../../components/Cards/GiftCards';
import {HostingSection} from '../../components/HostingSection/HostingSection';
import { FutureGetaway } from '../../components/FutureGetaways/FutureGetaway';

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