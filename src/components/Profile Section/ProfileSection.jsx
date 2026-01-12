import React, { useState, useEffect } from "react";
import { Container } from "../../Styles/General.styled";
import {
  ProfileContainer,
  WorldIconContainer,
  ProfileSectionContainer,
  DropDown,
  DropDownContainer,
} from "./ProfileSection.styled";
import { TbWorld } from "react-icons/tb";
import { PiList } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { usersAPI, authAPI } from "../../services/api";

const ProfileSection = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isBecomingHost, setIsBecomingHost] = useState(false);
  const [hostMessage, setHostMessage] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await authAPI.getCurrentUser();
        setIsHost(response.user.isHost);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleBecomeHost = async () => {
    setIsBecomingHost(true);
    setHostMessage("");
    try {
      const response = await usersAPI.becomeHost();
      setHostMessage("Successfully became a host!");
      setIsHost(true);
    } catch (error) {
      setHostMessage("Failed to become a host. Please try again.");
      console.error("Become host error:", error);
    } finally {
      setIsBecomingHost(false);
    }
  };

  if (loading) {
    return (
      <ProfileSectionContainer>
        <Container className="profile-section">
          <h2 className="host-title">Loading...</h2>
        </Container>
      </ProfileSectionContainer>
    );
  }

  return (
    <ProfileSectionContainer>
      <Container className="profile-section">
        {isHost ? (
          <h2 className="host-title">Welcome host!</h2>
        ) : (
          <h2
            className="host-title"
            onClick={handleBecomeHost}
            disabled={isBecomingHost}
            style={{ cursor: isBecomingHost ? "not-allowed" : "pointer" }}
          >
            {isBecomingHost ? "Becoming a host..." : "Become a host"}
          </h2>
        )}

        {hostMessage && <div className="host-message">{hostMessage}</div>}

        <WorldIconContainer>
          <TbWorld className="world-icon" />
        </WorldIconContainer>

        <DropDown>
          <ProfileContainer onClick={handleDropDown}>
            <PiList className="list-icon" />
            <CgProfile className="profile-icon" />
            {isDropDownOpen && (
              <DropDownContainer>
                <a href="/login" className="dropdown-a-tag">
                  <div className="dropdown-login">Login</div>
                </a>
                <a href="/reservations" className="dropdown-r-tag">
                  <div className="dropdown-login">View reservations</div>
                </a>
              </DropDownContainer>
            )}
          </ProfileContainer>
        </DropDown>
      </Container>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
