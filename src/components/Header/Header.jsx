import React from 'react'
import { Title, Subtitle } from '../../Styles/General.styled'
import ProfileSection from '../Profile Section/ProfileSection'
import { HeaderContainer } from'./Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
      <img className='logo' src='https://cdn.brandfetch.io/idkuvXnjOH/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1717146469893' alt='logo'/>
      <ProfileSection />
    </HeaderContainer>
  )
}

export default Header