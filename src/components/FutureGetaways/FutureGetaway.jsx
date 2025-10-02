import React from "react";
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
  return (
    <GetawayContainer>
      <Title className="Getaway-title">Inspiration for future getaways</Title>

      <div className="Getaway-header">
        <GetawayHeader>Destinations for arts & culture</GetawayHeader>
        <GetawayHeader>Destinations for outdoor adventure</GetawayHeader>
        <GetawayHeader>Mountain cabin</GetawayHeader>
        <GetawayHeader>Beach destinations</GetawayHeader>
        <GetawayHeader>Popular destinations</GetawayHeader>
        <GetawayHeader>Unique stays</GetawayHeader>
      </div>

      <GetawayCardsContainer>
        <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards>Phoenix - Arizona</GetawayCards>
        <GetawaySubtitle>Mountain View - California</GetawaySubtitle>
        </GetawayOrganizer>

                <GetawayOrganizer>
        <GetawayCards className="more">Show more</GetawayCards>
        </GetawayOrganizer>
      </GetawayCardsContainer>
    </GetawayContainer>
  );
};
