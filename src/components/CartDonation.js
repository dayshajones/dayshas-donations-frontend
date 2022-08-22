import React from 'react'
import { connect } from 'react-redux'
import {BsFillXSquareFill} from "react-icons/bs";
import { removeFromCart } from '../redux/actions/cartActions'

const CartDonation = ({ donation, removeFromCart }) => {

    return (
        <div className='cart-donation-card'>
        <h4>{donation.title}</h4>
        <p>{donation.brand}</p>
        <p>{donation.department}</p>
        <p>{donation.size}</p>
        <img src={donation.image_url} alt={donation.title} />
          {/* <p>{available}</p> */}
          <p>${donation.shipping_price} </p>
          <button onClick={() => removeFromCart(donation.id)}
           className='dtl-cart-item'>
            <BsFillXSquareFill/>
            </button>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect (null, mapDispatchToProps)(CartDonation)
