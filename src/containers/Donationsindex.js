import React, {useEffect} from "react"
import { connect } from "react-redux"
import DonationCard from '../components/Donation/DonationCard'
import { getDonations } from '../redux/actions/donationsAction'

const DonationIndex = ({getDonations, allDonations}) => {

  useEffect(getDonations, [getDonations])

  return (
    <>
    <div className="cards">
       <div className="wrap">
        {allDonations.map(donation => <DonationCard {...donation} key={donation.id} />)}
        </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
  allDonations: state.allDonations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDonations: () => { dispatch(getDonations())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationIndex)