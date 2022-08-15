import React from 'react'

// import { connect } from "react-redux"
// import { useParams } from "react-router"
// import { getDonation } from "../redux/actions/donationsAction"
// import { useEffect } from 'react'
// function DonationsDetails(props) {
  
//   const route = useParams().id
//   console.log(props.getDonation)

//   useEffect(() => getDonation(route), [getDonation, route])

//   return (
//     <div className='donation-details'>    
//       {/* <p>{brand}</p>
//     <p>{department}</p>
//     <img src={image_url} />
//       <p>{available}</p>
//       <p>${shipping_price} </p>
//       <button>Add to Cart</button> */}
//       </div>
//   )
// }

// export default connect(null, {getDonation})(DonationsDetails)


import { connect } from "react-redux"
// import { useParams } from "react-router"
import { getDonation } from "../redux/actions/donationsAction"

function DonationsDetails({title, brand, department, image_url, available, shipping_price}) {
  
  // const route = useParams().id
  // console.log(props.getDonation)

  return (
    <div className='donation-details'>    
      <p>{brand}</p>
    <p>{department}</p>
    <img src={image_url} alt={title} />
      <p>{available}</p>
      <p>${shipping_price} </p>
      <button>Add to Cart</button>
      </div>
  )
}

export default connect(null, {getDonation})(DonationsDetails)
