import React from "react";
import ProfileSection from "../Profile Section/ProfileSection";
import { HeaderContainer, MainContainer } from "./Header.styled";
import CalenderSection from "../CalenderSection/CalenderSection";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <a onClick={() => navigate("/")}>
        <img
          className="logo"
          src="https://cdn.brandfetch.io/idkuvXnjOH/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1717146469893"
          alt="logo"
        />
      </a>
      <MainContainer>
        <div className="calender-titles">

          <div className="header-titles">
            <h1 className="title"> places to stay </h1>
            <h1 className="title"> Experiences </h1>
            <h1 className="title"> Online Experiences </h1>
          </div>
          
          <CalenderSection />
        </div>
      </MainContainer>
      <ProfileSection />
    </HeaderContainer>
  );
};

export default Header;
