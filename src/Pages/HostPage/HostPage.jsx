import { useHostGuard } from "../../services/hooks";
import { PillButton } from '../../components/Buttons/PillButton.styled';
import {HostPageContainer, HostPageHeader, HostPageBody } from "./HostPage.styled";

const HostPage = () => {
  useHostGuard();
  
  return (
    <HostPageContainer>
      <HostPageHeader>
        <div className="pill-container">
        <PillButton className="btn">List a new property</PillButton>
        <PillButton className="btn">List a new property</PillButton>
        <PillButton className="btn">List a new property</PillButton>
        </div>
      </HostPageHeader>
      <HostPageBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis itaque pariatur reprehenderit perferendis voluptate sed sequi quisquam hic illo. Soluta eius, optio expedita ratione atque quae suscipit nesciunt necessitatibus.</HostPageBody>
    </HostPageContainer>
  );
}

export default HostPage
