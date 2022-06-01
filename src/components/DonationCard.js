import { Link } from 'react-router-dom'

export function DonationCard({id, title, brand, department, image_url, available, shipping_price}){
  return <div className="card">
    <Link to={`/donations/${id}`}><h3>{title}</h3></Link>
    <p>{brand}</p>
    <p>{department}</p>
    <img src={image_url} />
      <h5>{available}</h5>
      <h5>${shipping_price} </h5>
  </div>
}