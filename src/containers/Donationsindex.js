import React, {useEffect} from "react"
import {connect} from 'react-redux'
import {useSelector } from 'react-redux'
import { getDonations } from '../redux/actions/donationsAction'
import DonationCard from '../components/Donation/DonationCard'

const DonationIndex = ({getDonations}) => {

  useEffect(getDonations, [getDonations])

  const allDonations = useSelector((state) => state.allDonations)

  return (
    <div className="cards">
       <div className="wrap">
        {allDonations.map(donation => <DonationCard {...donation} key={donation.id} />)}
        </div>
    </div>
  )
}

export default connect(null, { getDonations })(DonationIndex)