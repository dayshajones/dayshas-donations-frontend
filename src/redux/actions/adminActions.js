export const submitSignup = (admin) => {
    return dispatch => fetch("http://localhost:3000/admins", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    })
    .then(resp => resp.json())
    .then(admin => dispatch({type: "SET_ADMIN", payload: admin}))
}

export const submitLogin = (admin) => {
  return dispatch => fetch("http://localhost:3000/sessions", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(admin),
  })
  .then(resp => resp.json())
  .then(admin => dispatch({type: "SET_ADMIN", payload: admin}))
}

export const logout = () => {
  return dispatch => {
    dispatch({type: "LOGOUT"})
  }
}



  