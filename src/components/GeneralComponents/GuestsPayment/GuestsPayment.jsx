import React from 'react'
import { GuestsPaymentContainer, GuestsTitle, Pricing, PaymentRow } from './GuestsPayment.styled'

const GuestsPayment = ({ property }) => {
  return (

    <GuestsPaymentContainer>
        <PaymentRow>
        <GuestsTitle>$400 x 5 nights</GuestsTitle> <Pricing> $7098</Pricing>
        </PaymentRow>

        <PaymentRow>
        <GuestsTitle>Weekly discount</GuestsTitle> <Pricing>$7098</Pricing>
        </PaymentRow>

        <PaymentRow>
        <GuestsTitle>Cleaning fee</GuestsTitle> <Pricing>$7098</Pricing>
        </PaymentRow>
        
        <PaymentRow>
        <GuestsTitle>Service fee</GuestsTitle> <Pricing>$7098</Pricing>
        </PaymentRow>

        <PaymentRow className='last'>
        <GuestsTitle >Occupancy taxes and fees</GuestsTitle> <Pricing>$7098</Pricing>
        </PaymentRow>

        <PaymentRow>
        <GuestsTitle className='total'>Total</GuestsTitle> <Pricing className='total'>$100000</Pricing>
        </PaymentRow>
    </GuestsPaymentContainer>
    )
}

export default GuestsPayment