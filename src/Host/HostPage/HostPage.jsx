import { useHostGuard } from "../../services/hooks";
import UserListings from "../UserListings/UserListings";
import { HostPageBody, HostPageContainer } from "./HostPage.styled";
import { useNavigate } from "react-router-dom";
import HostHeaderComponent from "../HostComponents/HostHeaderComponent";

const HostPage = () => {
  useHostGuard();
  const navigate = useNavigate();
  return (
    <HostPageContainer>
      <HostHeaderComponent />
      <HostPageBody> <UserListings /> </HostPageBody>
    </HostPageContainer>
  );
}

export default HostPage
