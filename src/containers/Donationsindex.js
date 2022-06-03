import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from "react"
import { getDonations } from '../redux/actions/donationsAction'
import { DonationCard } from '../components/DonationCard'

function DonationsIndex() {
    const donations = useSelector(state => state.donations)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDonations())
    }, [getDonations])

    return <div className="cards">
        <div className="wrap">
        {donations.map(donation => <DonationCard {...donation} key={donation.id}/>)}
    </div>
    </div>
}

// const mapStateToProps = (state) => {
//     return {donations: state.donations}
// }
    
// export default connect(mapStateToProps, { getDonations})(DonationsIndex)

export default DonationsIndex