import React from 'react'
import { RulesAndSafety, RulesSubtitle } from './RulesAndSafety.styled'
import { BookingTitle } from '../../BookingPage.styled'

const RulesAndSafetyContainer = () => {
  return (
    <RulesAndSafety>
      <div className="rules">
        <BookingTitle className="rules-title">🏠 House Rules</BookingTitle>
        <RulesSubtitle>• Check-in: After 4:00PM</RulesSubtitle>
        <RulesSubtitle>• Check-out: 10:00AM</RulesSubtitle>
        <RulesSubtitle>• Self check-in with lock-box</RulesSubtitle>
        <RulesSubtitle>• Not suitable for infants (under 2 years)</RulesSubtitle>
        <RulesSubtitle>• No smoking</RulesSubtitle>
        <RulesSubtitle>• No pets</RulesSubtitle>
        <RulesSubtitle>• No parties or events</RulesSubtitle>
      </div>
      <div className="safety">
        <BookingTitle className="rules-title">🛡️ Health & Safety</BookingTitle>
        <RulesSubtitle>• Committed to BookingHub's enhanced cleaning process</RulesSubtitle>
        <RulesSubtitle>• BookingHub's social-distancing and other COVID-19-related guidelines apply</RulesSubtitle>
        <RulesSubtitle>• Carbon monoxide alarm</RulesSubtitle>
        <RulesSubtitle>• Smoke alarm</RulesSubtitle>
        <RulesSubtitle>• Security Deposit - if you damage the home, you may be charged up to $566</RulesSubtitle>
      </div>
      <div className="cancel">
        <BookingTitle className="rules-title">❌ Cancellation Policy</BookingTitle>
        <RulesSubtitle>• Free cancellation</RulesSubtitle>
      </div>
    </RulesAndSafety>
  )
}

export default RulesAndSafetyContainer