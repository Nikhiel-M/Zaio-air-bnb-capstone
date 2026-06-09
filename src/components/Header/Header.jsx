import React, { useState } from "react";
import ProfileSection from "../Profile Section/ProfileSection";
import { HeaderContainer, MainContainer} from "./Header.styled";
import CalenderSection from "../CalenderSection/CalenderSection";
import { useLocation, useNavigate } from "react-router-dom";
import BlackLogo from "../../assets/BookingHubBlack-Photoroom.png";
import WhiteLogo from "../../assets/BookingHubWhite-Photoroom.png"; 

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const colorPaths = ["/"];
  const isColorChange = colorPaths.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/"),
  );

  const calendarPaths = ["/", "/locations"];
  const isCalendarPage = calendarPaths.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/"),
  );

  const titlesPaths = ["/", "/booking"];
  const isTitlesPage = titlesPaths.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/"),
  );


  return (
    <HeaderContainer $isColorChange={isColorChange}>
      <a
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="logo"
          src={
            isColorChange
            ? BlackLogo
              : WhiteLogo
          }
          alt="logo"
        />
      </a>
      <MainContainer>
        <div className="calender-titles">
          {isTitlesPage && (
            <div className="header-titles">
              <h1 className="title"> places to stay </h1>
              <h1 className="title"> Experiences </h1>
              <h1 className="title"> Online Experiences </h1>
            </div>
          )}
          {isCalendarPage && <CalenderSection />}
        </div>
      </MainContainer>
      <ProfileSection />
    </HeaderContainer>
  );
};

export default Header;
