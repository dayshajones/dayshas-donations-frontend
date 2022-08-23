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