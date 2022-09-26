import React from "react"
import {useSelector } from 'react-redux'
import DonationCard from '../components/Donation/DonationCard'

const DonationIndex = () => {

  const allDonations = useSelector((state) => state.allDonations)

  // const newDonationsArr = [...allDonations]
  
  // const [sorted, setSorted] = useState(newDonationsArr)

  // const handleSort = () => {
  //   const newSorted = [...allDonations].sort((a,b) => {
  //       return a.title < b.title ? 1 : -1
  //   })
  //   console.log(newSorted)
  //   setSorted(newSorted)
  // }

  return (
    <div className="cards">
      {/* <button onClick={handleSort}>sort</button> */}
       <div className="wrap">
        {allDonations.map(donation => <DonationCard {...donation} key={donation.id} />)}
        </div>
    </div>
  )
}

export default DonationIndex