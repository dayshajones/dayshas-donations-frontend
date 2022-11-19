export const getDonations = () => {
  return dispatch => {
      fetch("https://dayshas-donations.herokuapp.com/donations")
      .then(r => r.json())
      .then(donations => dispatch({type: "GET_DONATIONS", payload: donations}))
  }
}

export const getDonation = (id) => {
    return dispatch => fetch(`https://dayshas-donations.herokuapp.com/donations/${id}`)
    .then(res => res.json())
    .then(donation => dispatch({type: "GET_DONATION", payload: donation}))
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
    return fetch("https://dayshas-donations.herokuapp.com/donations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDonationData),
  })
  .then(resp => resp.json())
  .then((donation) => {
    return dispatch({
      type: "ADD_DONATION",
      payload: donation})
    })
  }
}

export const deleteDonation = (donationId) => {
  return dispatch => {
    return  fetch(`https://dayshas-donations.herokuapp.com/donations/${donationId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
  })
    .then(resp => resp.json())
    .then(() => {
      dispatch({ type: "DELETE_DONATION", payload: donationId})
    })
  }
}