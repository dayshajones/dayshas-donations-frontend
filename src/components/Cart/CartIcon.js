import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'

const CartIcon = ({cart}) => {

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const count = cart.length;
    setCartCount(count)
  }, [cart, cartCount])

  return (
          <span className='item-count'>{cartCount}</span>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps)(CartIcon)
