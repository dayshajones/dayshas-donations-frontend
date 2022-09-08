import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { connect, useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {getDonation, deleteDonation} from '../../redux/actions/donationsAction'
import {BsFillBackspaceFill}  from "react-icons/bs";
import { Button } from 'react-bootstrap'

const DonationsDetails = ({getDonation, name, title, brand, size, department, image_url, available, shipping_price}) => {

  const params = useParams()
  const donationId = params.id

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getDonation(donationId)
  }, [getDonation, donationId])

  const handleClick = () => {
    dispatch(deleteDonation(donationId))
    navigate("/donations")
  }
  

  return (
    name?
    
      <div>
        <h4>{title}</h4>
        <p>{brand}</p>
        <p>{department}</p>
        <p>{size}</p>
        <img src={image_url} alt={title} />
          <p>{available}</p>
          <p>${shipping_price} </p>
          <Link to={`/donations`}>
          <Button variant="outline-secondary"><BsFillBackspaceFill/>View All</Button>
          </Link>
          <br/>
          <style>
          <Button variant="outline-secondary" onClick={handleClick}>Delete</Button>
          </style>
        </div>
        :
        <div className='donation-details'>  
          <h4>{title}</h4>
          <p>{brand}</p>
          <p>{department}</p>
          <p>{size}</p>
          <img src={image_url} alt={title} />
            <p>{available}</p>
            <p>${shipping_price} </p>
            <Link to={`/donations`}>
            <Button variant="outline-secondary"><BsFillBackspaceFill/>View All</Button>
            </Link>
            <br/>
          </div>
      )
}

const mapStateToProps = (state) => {
  return {...state.currentDonation,
    name: state.admin.name}
}


export default connect(mapStateToProps, {getDonation})(DonationsDetails)
