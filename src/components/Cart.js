import React from 'react'
import { connect } from 'react-redux'
import CartDonation from './CartDonation'

const Cart = ({ cart }) => {

  return (
    <div className='cart-donation-container'>
      {cart.map((donation) => (
        <CartDonation key={donation.id} donation={donation}/>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
