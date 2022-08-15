import React from "react"
import { useEffect } from "react"
import { getDonations } from '../redux/actions/donationsAction'
import { connect } from 'react-redux'
import { DonationCard } from '../components/DonationCard'

function DonationIndex({getDonations, donations}){

// const [ cart, setCart] = useState([])

const handleClick = (donation) => {
    console.log(donation)
}

  useEffect(getDonations, [getDonations])

  return <div className="cards">
       <div className="wrap">
        {donations.map(donation => <DonationCard {...donation} key={donation.id} handleClick={handleClick} />)}
        </div>
  </div>
}

const mapStateToProps = (state) => {
  return {donations: state.donations}
}

export default connect(mapStateToProps, { getDonations })(DonationIndex)