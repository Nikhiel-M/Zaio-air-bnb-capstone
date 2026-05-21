import React from 'react';
import Body from '../../components/Body/Body';
import Cards from '../../components/Cards/Cards';
import {GiftCards} from '../../components/Cards/GiftCards';
import {HostingSection} from '../../components/HostingSection/HostingSection';
import { FutureGetaway } from '../../components/FutureGetaways/FutureGetaway';
import LargeCards from '../../components/Cards/LargeCards';
import { HomePageContainer } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Body />
      <Cards />
      <LargeCards />
      <GiftCards />
      <HostingSection />
      <FutureGetaway />
    </HomePageContainer>
  );
};

export default HomePage;