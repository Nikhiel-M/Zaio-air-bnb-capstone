import React from "react";
import {
  LargeCardsContainer,
  ImageWrapper,
  TitleOverlay,
  CardOrganizer,
} from "./LargeCards.styled";
import { Title } from "../../Styles/General.styled";
import { PillButton } from "../Buttons/PillButton.styled";

const LargeCards = () => {
  return (
    <CardOrganizer>
    <LargeCardsContainer>
      <ImageWrapper>
        <img
          className="body-image"
          src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-5975701/original/f9fef9bc-c6b4-44f0-a409-88dcc7083826.jpeg?im_w=960"
          alt="activities"
        />

        <TitleOverlay>
          <Title className="img-title">Activities.</Title>
          <PillButton className="img-button">Experiences</PillButton>
        </TitleOverlay>
      </ImageWrapper>
    </LargeCardsContainer>

    <LargeCardsContainer>
          <ImageWrapper>
        <img
          className="body-image"
          src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6188023/original/f1d63070-07b8-4996-be04-477f5ddbf22c.jpeg?im_w=960"
          alt="activities"
        />

        <TitleOverlay>
          <Title className="img-title">Dining experiences.</Title>
          <PillButton className="img-button">Experiences</PillButton>
        </TitleOverlay>
      </ImageWrapper>
      </LargeCardsContainer>
    </CardOrganizer>
  );
};

export default LargeCards;
