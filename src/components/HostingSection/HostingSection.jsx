import React from 'react'
import { HostingContainer } from './HostingSection.styled'
import { ImageWrapper, TitleOverlay } from '../Body/Body.styled'
import { Title } from '../../Styles/General.styled'
import { PillButton } from '../Buttons/PillButton.styled'

export const HostingSection = () => {
  return (
    <HostingContainer>
        <ImageWrapper>
                <img
                  className="host-image"
                  src="https://absolutemama.co.za/wp-content/uploads/2024/09/brooke-cagle-SV3e7hGlVnc-unsplash1-683x1024.jpg"
                  alt="activities"
                />
        
                <TitleOverlay className='host-overlay'>
                  <Title className="host-title">Questions about hosting?</Title>
                  <PillButton className="host-button">Ask a Superhost</PillButton>
                </TitleOverlay>
              </ImageWrapper>
    </HostingContainer>
)
}

