import React from "react";
import { BodyContainer, ImageWrapper, TitleOverlay } from "./Body.styled";
import { Title } from "../../Styles/General.styled";
import { PillButton } from "../Buttons/PillButton.styled";


const Body = () => {
  return (
    <BodyContainer>
      {/* image */}
      <ImageWrapper>
        <img
          className="body-image"
          src="https://cdn.prod.website-files.com/677bf0738f59bbb0ed8896aa/677bf0738f59bbb0ed889f1c_RW%20blog.png"
          alt="home image"
        />

        <TitleOverlay>
          <Title className="img-title">Not sure where to go? Perfect.</Title>
          <PillButton className="img-button">I'm Flexible</PillButton>
        </TitleOverlay>
      </ImageWrapper>
    </BodyContainer>
  );
};

export default Body;
