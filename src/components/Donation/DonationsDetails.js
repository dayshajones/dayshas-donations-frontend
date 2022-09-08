import React, { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { connect, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import {getDonation, deleteDonation} from '../../redux/actions/donationsAction'
import {BsFillBackspaceFill}  from "react-icons/bs";

const DonationsDetails = ({getDonation, title, brand, size, department, image_url, available, shipping_price}) => {

  const params = useParams()
  const donationId = params.id
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    getDonation(donationId)
  }, [getDonation, donationId])

  const handleClick = () => {
    dispatch(deleteDonation(donationId))
    navigate("/donations")
  }

  return (
    <div className='donation-details'>  
        <h4>{title}</h4>
        <p>{brand}</p>
        <p>{department}</p>
        <p>{size}</p>
        <img src={image_url} alt={title} />
          <p>{available}</p>
          <p>${shipping_price} </p>
          <Link to={`/donations`}>
          <button>go back <BsFillBackspaceFill/> </button>
          </Link>
          <br/>
          <button onClick={handleClick}>Delete</button>
          </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.currentDonation}
}


export default connect(mapStateToProps, {getDonation})(DonationsDetails)
