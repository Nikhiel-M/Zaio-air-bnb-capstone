import React from 'react'
import { HostHeaderContainer } from './HostHeaderComponent.styled'
import { PillButton } from '../../components/Buttons/PillButton.styled';
import { useNavigate } from 'react-router-dom';


const HostHeaderComponent = () => {
const navigate = useNavigate();
    return    (
    <HostHeaderContainer>
                <div className="pill-container">
                <PillButton className="btn" onClick={() => navigate("/host/reservations")}>View Reservations</PillButton>
                <PillButton className="btn" onClick={() => navigate("/host")}>View Listings</PillButton>
                <PillButton className="btn" onClick={() => navigate("/host/post-booking")}>Create Listings</PillButton>
                </div>
    </HostHeaderContainer>
  )
}

export default HostHeaderComponent