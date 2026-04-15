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
import { useNavigate, useLocation } from "react-router-dom";

const ProfileSection = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [hostMessage, setHostMessage] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkUserStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setIsHost(false);
        setLoading(false);
        return;
      }
      try {
        const response = await authAPI.getUserName();
        setUser(response.user);
        setIsHost(response.user.isHost);
      } catch (error) {
        setUser(null);
        setIsHost(false);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
    
  }, [location]);

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleBecomeHost = async () => {
    navigate("/login-host");
  };

    const handleRedirectToHost = async () => {
    navigate("/host");
  };

  const handleLogout = () => {
    authAPI.logout();
    setUser(null);
    setIsHost(false);
    navigate("/");
  };

  // const handleBookingRoute = () => {
  //   navigate("/post-booking");
  // };

  const iconPaths = ["/", "/booking", "/locations"];
  const isIconsPage = iconPaths.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/"),
  );

  return (
    <ProfileSectionContainer>
      <Container className="profile-section">
        {isIconsPage && (
          <>
            <h2
              className="host-title"
              onClick={!isHost ? handleBecomeHost : handleRedirectToHost}
              style={{ cursor: isHost ? "default" : "pointer" }}
            >
              {isHost ? "Welcome host" : "Become a host"}
            </h2>
            {hostMessage && <div className="host-message">{hostMessage}</div>}
            <WorldIconContainer>
              <TbWorld className="world-icon" />
            </WorldIconContainer>
          </>
        )}

        <DropDown>
          <ProfileContainer onClick={handleDropDown}>
            <PiList className="list-icon" />
            <CgProfile className="profile-icon" />
            {isDropDownOpen && (
              <DropDownContainer>
                {!user ? (
                  <a
                    onClick={() => navigate("/login")}
                    className="dropdown-a-tag"
                  >
                    <div className="dropdown-login">Login</div>
                  </a>
                ) : (
                  <>
                    <a
                      onClick={() => navigate("/reservations")}
                      className="dropdown-r-tag"
                    >
                      <div className="dropdown-login">View reservations</div>
                    </a>
                    {isHost && (
                      <a
                        onClick={() => navigate("/user-listings")}
                        className="dropdown-r-tag"
                      >
                        <div className="dropdown-login">Your listings</div>
                      </a>
                    )}
                    <a onClick={handleLogout} className="dropdown-r-tag">
                      <div className="dropdown-login">Logout</div>
                    </a>
                  </>
                )}
              </DropDownContainer>
            )}
          </ProfileContainer>
        </DropDown>
      </Container>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;

//  {user && isHost ? (
//       <h2 className="host-title-booking" onClick={handleBookingRoute}>
//         {" "}
//         Welcome {user?.firstName} <br /> Post your homes Here!
//       </h2>
//     ) : (
//       <h2
//         className="host-title"
//         onClick={handleBecomeHost}
//         disabled={isBecomingHost}
//         style={{ cursor: isBecomingHost ? "not-allowed" : "pointer" }}
//       >
//         {!user ? (
//           <>
//             Welcome guest <br /> please sign in
//           </>
//         ) : (
//           <>
//             Welcome {user?.firstName} <br /> Click here to become a
//             host{" "}
//           </>
//         )}
//       </h2>
//     )}
