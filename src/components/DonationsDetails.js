import React from 'react'

export default function DonationsDetails({id, title, brand, department, size, image_url, available, shipping_price}) {
  return (
    <div className='donation-details'>    
      <p>{brand}</p>
      <p>{size}</p>
    <p>{department}</p>
    <img src={image_url} />
      <p>{available}</p>
      <p>${shipping_price} </p>
      <button>Add to Cart</button>
      </div>
  )
}
