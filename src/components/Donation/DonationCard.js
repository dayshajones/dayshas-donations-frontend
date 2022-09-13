import { Link } from 'react-router-dom'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { addToCart, loadDonation } from '../../redux/actions/cartActions'

const DonationCard = ({ id, title, brand, size, department, image_url, available, shipping_price, addToCart }) => {

  return (
    <>
         <style type="text/css">
        {`.btn-outline-secondary {
        background-color: #FA255E;
        color: white;
        border-color: #FA255E; }
      
        .btn-outline-secondary:hover {
        background-color: white;
        color:  #C39EA0;
        border-color: white;`} 
        </style>

    <div className="card">

      <Button disabled={!available} variant="outline-secondary" onClick={()=> addToCart({ id, title, brand, size, department, image_url, available, shipping_price})}>Add to Cart</Button>
      <Button disabled={available} variant="outline-secondary">Sold!</Button>
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{department}</p>
      <p>{size}</p>
      <img src={image_url} alt={title} />
        <p>{available}</p>
        <p>${shipping_price} </p> 
      <Link to={`/donations/${id}`}>
      <Button variant="outline-secondary" onClick={() => loadDonation({id, title, brand, size, department, image_url, available, shipping_price})}>
          View Donation
        </Button>
      </Link>
    </div>
  </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (donation) => dispatch(addToCart(donation)),
    loadDonation: (donation) => dispatch(loadDonation(donation)),
  }
}

export default connect(null, mapDispatchToProps)(DonationCard)