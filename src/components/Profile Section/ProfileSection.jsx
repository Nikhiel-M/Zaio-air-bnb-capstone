import React, { useState } from "react";
import { Container } from "../../Styles/General.styled";
import {
  ProfileContainer,
  WorldIconContainer,
  ProfileSectionContainer,
  DropDown,
} from "./ProfileSection.styled";
import { TbWorld } from "react-icons/tb";
import { PiList } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const ProfileSection = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <ProfileSectionContainer>
      <Container className="profile-section">
        <h2 className="host-title">Become a host</h2>

        <WorldIconContainer>
          <TbWorld className="world-icon" />
        </WorldIconContainer>

        <DropDown>
          <ProfileContainer onClick={handleDropDown}>
            <PiList className="list-icon" />
            <CgProfile className="profile-icon" />
            {isDropDownOpen && (
              <a href="/login" className="dropdown-a-tag">
                <div className="dropdown-login">Login</div>
              </a>
            )}
          </ProfileContainer>
        </DropDown>
      </Container>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
