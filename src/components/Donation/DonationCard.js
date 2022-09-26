import { Link } from 'react-router-dom'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { addToCart, loadDonation } from '../../redux/actions/cartActions'

const DonationCard = ({ id, title, brand, size, department, image_url, available, shipping_price}) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Button disabled={!available} variant="outline-secondary"
        onClick={()=> dispatch(addToCart({ id, title, brand, size, department, image_url, available, shipping_price}))}>Add to Cart</Button>
      <Button disabled={available} variant="outline-secondary">Sold!</Button>
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{department}</p>
      <p>{size}</p>
      <img src={image_url} alt={title} />
        <p>{available}</p>
        <p>${shipping_price} </p> 
      <Link to={`/donations/${id}`}>
        <Button variant="outline-secondary" onClick={() => dispatch(loadDonation({id, title, brand, size, department, image_url, available, shipping_price}))}>
          View Donation
        </Button>
      </Link>
    </div>
  )
}

export default DonationCard