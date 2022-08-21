import React from 'react'
// import { connect } from 'react-redux'

const CartDonation = ({ donation }) => {

    return (
        <div className='cart-donation-card'>
        <h4>{donation.title}</h4>
        <p>{donation.brand}</p>
        <p>{donation.department}</p>
        <p>{donation.size}</p>
        <img src={donation.image_url} alt={donation.title} />
          {/* <p>{available}</p> */}
          <p>${donation.shipping_price} </p>
      </div>
    )
}

export default CartDonation
