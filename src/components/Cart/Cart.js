import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import CartDonation from '../Cart/CartDonation'

const Cart = ({ cart }) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    let price = 0
    cart.forEach((donation) => {
      price += +donation.shipping_price
    })
    setTotal(price)
  }, [cart, total, setTotal])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/checkout', { state: {total} });
  }
  
  return (
    <div>
        <h3>SHIPPING TOTAL: ${total}</h3>
          <button onClick={handleClick}>
            Proceed to Payment
          </button>
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
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
