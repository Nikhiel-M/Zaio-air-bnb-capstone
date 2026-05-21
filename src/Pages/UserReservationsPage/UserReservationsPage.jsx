import React from 'react'
import { ReservationsHeader, ReservationsListContainer, ReservationsContainer } from '../../Host/HostReservationsPage/HostReservationsPage.styled'
import UserGridComponent from './UserGridComponent'

const UserReservationsPage = () => {
  return (
      <ReservationsContainer>
    <ReservationsHeader>
      My Reservations
    </ReservationsHeader>
    <ReservationsListContainer>
        <UserGridComponent  />
    </ReservationsListContainer>
  </ReservationsContainer>
  )
}

export default UserReservationsPage