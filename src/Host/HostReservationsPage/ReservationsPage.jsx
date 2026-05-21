import React from 'react'
import { ReservationsHeader, ReservationsListContainer, ReservationsContainer } from './ReservationsPage.styled'
import GridComponent from '../../components/GeneralComponents/GridComponent/GridComponent'
import { useHostGuard } from '../../services/hooks'
import HostHeaderComponent from '../HostComponents/HostHeaderComponent'

const ReservationsPage = () => {
  useHostGuard();
  return (
  <ReservationsContainer>
    <HostHeaderComponent />
    <ReservationsHeader>
      My Reservations
    </ReservationsHeader>
    <ReservationsListContainer>
        <GridComponent  />
    </ReservationsListContainer>
  </ReservationsContainer>
  )
}

export default ReservationsPage