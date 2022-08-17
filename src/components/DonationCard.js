// import { Link } from 'react-router-dom'
import React from 'react'
// import CardButton from './CardButton';
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

const DonationCard = ({ id, title, brand, size, department, image_url, available, shipping_price, handleClick, addToCart }) => {

  return (
  <div className="card">
    {/* <Link to={`/donations/${id}`}><h3>{title}</h3></Link> */}
    <h3>{title}</h3>
    <p>{brand}</p>
    <p>{department}</p>
    <p>{size}</p>
    <img src={image_url} alt={title} />
      <p>{available}</p>
      <p>${shipping_price} </p> 
      <button onClick={() => addToCart({id})}>Add to Cart</button>
      {/* <button onClick={() => addToCart({ id, title, brand, size, department, image_url, available, shipping_price})}>Add to Cart</button> */}
  </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps)(DonationCard)