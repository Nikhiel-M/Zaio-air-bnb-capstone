import React from 'react'
import { GuestsPaymentContainer, GuestsTitle, Pricing, PaymentRow } from './GuestsPayment.styled'

const GuestsPayment = ({ nights, pricePerNight, guests = 1 }) => {
  const subtotal = nights * pricePerNight;
  const cleaningFee = 50; 
  const serviceFee = Math.round(subtotal * 0.03);
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal + cleaningFee + serviceFee + taxes;

  return (
    <GuestsPaymentContainer>
        <PaymentRow>
        <GuestsTitle>${pricePerNight} x {nights} night/s</GuestsTitle> <Pricing> ${subtotal}</Pricing>
        </PaymentRow>

        <PaymentRow>
        <GuestsTitle>Cleaning fee</GuestsTitle> <Pricing>${cleaningFee}</Pricing>
        </PaymentRow>
        
        <PaymentRow>
        <GuestsTitle>Service fee</GuestsTitle> <Pricing>${serviceFee}</Pricing>
        </PaymentRow>

        <PaymentRow className='last'>
        <GuestsTitle >Occupancy taxes and fees</GuestsTitle> <Pricing>${taxes}</Pricing>
        </PaymentRow>

        <PaymentRow>
        <GuestsTitle className='total'>Total</GuestsTitle> <Pricing className='total'>${total}</Pricing>
        </PaymentRow>
    </GuestsPaymentContainer>
    )
}

export default GuestsPayment