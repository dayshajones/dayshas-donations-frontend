export function fetchDonations() {
    return dispatch => {
        fetch("http://localhost:3000/donations")
        .then(r => r.json())
        .then(donations => dispatch({type: GET_DONATIONS, payload: donations}))
    }
}