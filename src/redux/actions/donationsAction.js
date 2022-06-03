

export const getDonations = () => {
    return dispatch => {
        fetch("http://localhost:3000/donations")
        .then(r => r.json())
        .then(donations => dispatch({type: "GET_DONATIONS", payload: donations}))
    }
}

export const selectedDonations = (id) => {
    return dispatch => fetch("http://localhost:3000" + `/donations/${id}`)
    .then(res => res.json())
    .then(donation => dispatch({type: "SELECTED_DONATION", payload: donation})
    )
  }