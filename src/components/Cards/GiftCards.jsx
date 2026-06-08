import React from "react";
import { GiftCardsContainer } from "./GiftCards.styled";
import { Title } from "../../Styles/General.styled";
import { PillButton } from "../Buttons/PillButton.styled";


export const GiftCards = () => {
  return (
    <GiftCardsContainer>
      <div className="gift-copy">
        <Title className="gift-title">Shop gift cards</Title>
        <PillButton className="gift-button">Learn more</PillButton>
      </div>
      <div className="gift-image-container">
        <img
          className="gift-image"
          src="https://www.retailbox.co.za/cdn/shop/products/gift-card-950794.jpg?v=1604567738"
          alt="gift card"
        />
      </div>
    </GiftCardsContainer>
  );
};

