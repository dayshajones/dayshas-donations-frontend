import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import CartDonation from './CartDonation'
// import { NavItem } from 'react-bootstrap'

const Cart = ({ cart }) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    let price = 0

    cart.forEach((donation) => {
      price += +donation.shipping_price
    })

    setTotal(price)
  }, [cart, total, setTotal])

  return (
    <div>
      <div className='cart-total-container'>
        <h3>SHIPPING TOTAL: ${total}</h3>
      </div>
      <br />
      <div className='cart-donation-container'>
        {cart.map((donation) => (
          <CartDonation key={donation.id} donation={donation}/>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
