import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {

  const cart = useSelector((state) => state.cart)

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const count = cart.length;
    setCartCount(count)
  }, [cart, cartCount])

  return (
          <span className='item-count'>{cartCount}</span>
  )
}


export default CartIcon
