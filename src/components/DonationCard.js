import { Link } from 'react-router-dom'

export function DonationCard({id, title, brand, size, department, image_url, available, shipping_price}){
  
  return <div className="card">
    <Link to={`/donations/${id}`}><h3>{title}</h3></Link>
    <p>{brand}</p>
    <p>{department}</p>
    <p>{size}</p>
    <img src={image_url} />
      <p>{available}</p>
      <p>${shipping_price} </p>
      <button>Add to Cart</button>
  </div>
}