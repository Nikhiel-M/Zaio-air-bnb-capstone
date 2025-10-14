import React, { useState } from "react";
import {
  GetawayCards,
  GetawayContainer,
  GetawayHeader,
  GetawayCardsContainer,
  GetawaySubtitle,
  GetawayOrganizer,
} from "./FutureGetaway.styled";
import { Title } from "../../Styles/General.styled";

export const FutureGetaway = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Destinations for arts & culture",
    "Destinations for outdoor adventure",
    "Mountain cabin",
    "Beach destinations",
    "Popular destinations",
    "Unique stays",
  ];

  return (
    <GetawayContainer>
      <Title className="Getaway-title">Inspiration for future getaways</Title>

      <div className="Getaway-header">
        {tabs.map((tab, index) => (
          <GetawayHeader
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab}
          </GetawayHeader>
        ))}
      </div>

      <GetawayCardsContainer>
        <GetawayOrganizer>
          <GetawayCards>Phoenix</GetawayCards>
          <GetawaySubtitle>Arizona</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Hot Springs</GetawayCards>
          <GetawaySubtitle>Arkansas</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Los Angeles</GetawayCards>
          <GetawaySubtitle>California</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>San Diego</GetawayCards>
          <GetawaySubtitle>California</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>San Francisco</GetawayCards>
          <GetawaySubtitle>California</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Barcelona</GetawayCards>
          <GetawaySubtitle>Catalonia</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Prague</GetawayCards>
          <GetawaySubtitle>Czechia</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Washington</GetawayCards>
          <GetawaySubtitle>District of Columbia</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Keswick</GetawayCards>
          <GetawaySubtitle>England</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>London</GetawayCards>
          <GetawaySubtitle>England</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards>Scarborough</GetawayCards>
          <GetawaySubtitle>England</GetawaySubtitle>
        </GetawayOrganizer>
        <GetawayOrganizer>
          <GetawayCards className="more">Show more</GetawayCards>
        </GetawayOrganizer>
      </GetawayCardsContainer>
    </GetawayContainer>
  );
};
