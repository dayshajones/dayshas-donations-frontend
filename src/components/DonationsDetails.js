import React from 'react'
import { connect } from "react-redux"
// import { useParams } from "react-router"
import { loadDonation } from "../redux/actions/cartActions"

function DonationsDetails({title, brand, department, image_url, available, shipping_price}) {
  
  return (
    <div className='donation-details'>    
      <p>{brand}</p>
    <p>{department}</p>
    <img src={image_url} alt={title} />
      <p>{available}</p>
      <p>${shipping_price} </p>
      <button>Add to Cart</button>
      </div>
  )
}

export default connect(null, {loadDonation})(DonationsDetails)
