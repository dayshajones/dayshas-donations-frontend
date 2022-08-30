export const getDonations = () => {
  return dispatch => {
      fetch("http://localhost:3000/donations")
      .then(r => r.json())
      .then(donations => dispatch({type: "GET_DONATIONS", payload: donations}))
  }
}

export const getDonation = (id) => {
    return dispatch => fetch(`http://localhost:3000/donations/${id}`)
    .then(res => res.json())
    .then(donation => dispatch({type: "GET_DONATION", payload: donation})
    )
}

export const submitDonation = (newDonation) => {
  return dispatch => {
    const newDonationData = {
      brand: newDonation.brand,
      department: newDonation.department,
      size: newDonation.size,
      title: newDonation.title,
      image_url: newDonation.image_url,
      available: newDonation.available,
      shipping_price: newDonation.shipping_price,
      admin_id: newDonation.adminId
    }
    console.log(newDonationData)
    return fetch("http://localhost:3000/donations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDonationData),
  })
  .then(resp => resp.json())
  .then(donation => dispatch({type: "ADD_DONATION", payload: donation}))
  }
}
