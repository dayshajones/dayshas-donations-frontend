import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import DonationCard from '../components/Donation/DonationCard'
import { getDonations } from '../redux/actions/donationsAction'

const DonationIndex = ({getDonations, allDonations}) => {

  useEffect(getDonations, [getDonations])

  const [searchTerm, setSearchTerm] = useState('')

  const filtered = !searchTerm? allDonations : allDonations.filter(donation => donation.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
    <div>
      <input type='text' placeholder="Search by title.." value={searchTerm} onChange={handleChange} />
    </div>
    <div className="cards">
       <div className="wrap">
        {filtered.map(donation => <DonationCard {...donation} key={donation.id} />)}
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