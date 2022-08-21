import React from "react"
import { useEffect } from "react"
import { getDonations } from '../redux/actions/donationsAction'
import { connect } from 'react-redux'
import DonationCard from '../components/DonationCard'

function DonationIndex({getDonations, allDonations}){

  useEffect(getDonations, [getDonations])

  return (
    <div className="cards">
       <div className="wrap">
        {allDonations.map(donation => <DonationCard {...donation} key={donation.id} />)}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allDonations: state.allDonations
  }
}


export default connect(mapStateToProps, { getDonations })(DonationIndex)
