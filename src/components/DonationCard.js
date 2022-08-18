import { Link } from 'react-router-dom'
import React from 'react'
// import CardButton from './CardButton';
import { connect } from 'react-redux'
import { addToCart, loadDonation } from '../redux/actions/cartActions'

const DonationCard = ({ id, title, brand, size, department, image_url, available, shipping_price, addToCart }) => {

  return (
  <div className="card">
    <Link to={`/donations/${id}`}>
      <button onClick={() => loadDonation({id, title, brand, size, department, image_url, available, shipping_price})}>
        View Donation
      </button>
    </Link>
    <h3>{title}</h3>
    <p>{brand}</p>
    <p>{department}</p>
    <p>{size}</p>
    <img src={image_url} alt={title} />
      <p>{available}</p>
      <p>${shipping_price} </p> 
      {/* <button onClick={() => addToCart({})}>Add to Cart</button> */}
      <button onClick={() => addToCart({ id, title, brand, size, department, image_url, available, shipping_price})}>Add to Cart</button>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (donation) => dispatch(addToCart(donation))
  }
}

export default connect(null, mapDispatchToProps)(DonationCard)