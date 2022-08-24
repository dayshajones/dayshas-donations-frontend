export const submitSignup = (admin) => {
    return dispatch => fetch("http://localhost:3000/admins", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    })
    .then(resp => resp.json())
    .then(console.log)
}




  