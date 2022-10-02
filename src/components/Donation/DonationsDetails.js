import React from 'react'
import { Link} from 'react-router-dom'
import { connect} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteDonation} from '../../redux/actions/donationsAction'
import {BsFillBackspaceFill}  from "react-icons/bs";
import { Button } from 'react-bootstrap'

const DonationsDetails = ({deleteDonation, donation, name}) => {

  const {title, brand, size, department, image_url, available, shipping_price} = donation

  const params = useParams()
  const donationId = params.id
  const navigate = useNavigate()

  const handleClick = () => {
    deleteDonation(donationId)
    navigate("/")
  }

  return (
        <div className='donation-details-card'>
            <Link to={`/donations`}>
              <Button variant="light">View All<BsFillBackspaceFill/> </Button>
            </Link>
          <h4>{title}</h4>
          <p>{brand}</p>
          <p>{department}</p>
          <p>{size}</p>
          <img src={image_url} alt={title} />
            <p>{available}</p>
            <p>${shipping_price} </p>
            <br/>
            <Button variant="light" disabled={!name ? true : false} onClick={handleClick}>Delete</Button>
          </div>
      )
}
const mapStateToProps = (state) => {
  return {
    name: state.admin.name, 
    donation: state.currentDonation
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteDonation: (donationId) => dispatch(deleteDonation(donationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationsDetails)