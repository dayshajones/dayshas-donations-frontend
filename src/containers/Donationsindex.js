import React from "react"
import {useSelector } from 'react-redux'
import DonationCard from '../components/Donation/DonationCard'

const DonationIndex = () => {

  const allDonations = useSelector((state) => state.allDonations)

  return (
    <div className="cards">

       <div className="wrap">
        {allDonations.map(donation => <DonationCard {...donation} key={donation.id} />)}
        </div>
    </div>
  )
}

export default DonationIndex