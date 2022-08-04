import { Link } from 'react-router-dom'

export function DonationCard({ id, title, brand, size, department, image_url, available, shipping_price, handleClick }){

  return <div className="card">
    <Link to={`/donations/${id}`}><h3>{title}</h3></Link>
    <h3>{title}</h3>
    <p>{brand}</p>
    <p>{department}</p>
    <p>{size}</p>
    <img src={image_url} alt={title} />
      <p>{available}</p>
      <p>${shipping_price} </p> 
      <button onClick={() => handleClick({ id, title, brand, size, department, image_url, available, shipping_price})}>Add to Cart</button>
  </div>
}