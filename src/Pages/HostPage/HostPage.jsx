import { useHostGuard } from "../../services/hooks";
import { PillButton } from '../../components/Buttons/PillButton.styled';
import {HostPageContainer, HostPageHeader, HostPageBody } from "./HostPage.styled";
import UserListings from "../UserListings/UserListings";
import { useNavigate } from "react-router-dom";

const HostPage = () => {
  useHostGuard();
  const navigate = useNavigate();
  return (
    <HostPageContainer>
      <HostPageHeader>
        <div className="pill-container">
        <PillButton className="btn" onClick={() => navigate("/host/reservations")}>View Reservations</PillButton>
        <PillButton className="btn" onClick={() => navigate("/host")}>View Listings</PillButton>
        <PillButton className="btn" onClick={() => navigate("/host/post-booking")}>Create Listings</PillButton>
        </div>
      </HostPageHeader>
      <HostPageBody> <UserListings  /> </HostPageBody>
    </HostPageContainer>
  );
}

export default HostPage
