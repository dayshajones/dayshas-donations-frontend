import React from 'react'

const Cart = ({cartDonations}) => {
  return (
    <div>Cart
      
      {cartDonations.length === 0 && (
      <div>No items in cart:</div>)}
    </div>

  )
}

export default Cart