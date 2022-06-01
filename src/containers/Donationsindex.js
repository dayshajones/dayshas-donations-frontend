import { connect } from 'react-redux'
import React, { useEffect } from "react"
import { getDonations } from '../redux/actions/donationsAction'
import { DonationCard } from '../components/DonationCard'

function DonationsIndex({getDonations, donations}) {
    useEffect(getDonations, [getDonations])

    return <div className="cards">
        <div className="wrap">
        {donations.map(donation => <DonationCard {...donation} key={donation.id}/>)}
    </div>
    </div>
}

const mapStateToProps = (state) => {
    return {donations: state.donations}
}
    
export default connect(mapStateToProps, { getDonations})(DonationsIndex)