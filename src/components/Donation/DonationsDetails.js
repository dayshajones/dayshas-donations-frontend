import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { connect, useSelector, useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {getDonation, deleteDonation} from '../../redux/actions/donationsAction'
import {BsFillBackspaceFill}  from "react-icons/bs";
import { Button } from 'react-bootstrap'

const DonationsDetails = ({getDonation}) => {

  const params = useParams()
  const donationId = params.id

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const name = useSelector((state) => state.admin.name)
  const donation = useSelector((state) => state.currentDonation)

  useEffect(() => {
    getDonation(donationId)
  }, [getDonation, donationId])

  const handleClick = () => {
    dispatch(deleteDonation(donationId))
    navigate("/")
  }

  return (
        <div className='donation-details-card'>
            <Link to={`/donations`}>
              <Button variant="light">View All<BsFillBackspaceFill/> </Button>
            </Link>
          <h4>{donation.title}</h4>
          <p>{donation.brand}</p>
          <p>{donation.department}</p>
          <p>{donation.size}</p>
          <img src={donation.image_url} alt={donation.title} />
            <p>{donation.available}</p>
            <p>${donation.shipping_price} </p>
            <br/>
            <Button variant="light" disabled={!name ? true : false} onClick={handleClick}>Delete</Button>
          </div>
      )
}

export default connect(null, {getDonation})(DonationsDetails)