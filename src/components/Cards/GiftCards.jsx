import React from "react";
import { GiftCardsContainer } from "./GiftCards.styled";
import { Title } from "../../Styles/General.styled";
import { PillButton } from "../Buttons/PillButton.styled";


export const GiftCards = () => {
  return (
    <GiftCardsContainer>
      <div>
        <Title className="gift-title">Shop Airbnb gift cards</Title>
        <PillButton className="gift-button">Learn more</PillButton>
      </div>
      <div className="gift-image-container">
        <img
          className="gift-image"
          src="https://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/Airbnb-3906241.webp?r=1644406120862"
          alt="gift card"
        />
      </div>
    </GiftCardsContainer>
  );
};

