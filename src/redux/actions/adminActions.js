// export const submitSignup = (newAdmin) => {
//     return dispatch => {
//       const newAdminData = {
//         name: newAdmin.name,
//         password: newAdmin.password
//       }
//       return fetch("http://localhost:3000/admins", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newAdminData),
//     })
//     .then(resp => resp.json())
//     .then(admin => dispatch({type: "SET_ADMIN", payload: admin}))
//   }
// }

export const submitLogin = (adminData) => {
  return dispatch => {
      const configAdminData = {
        name: adminData.name,
        password: adminData.password
      }
      fetch("https://dayshas-donations.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(configAdminData),
    })
    .then(resp => resp.json())
    .then(admin => dispatch({type: "SET_ADMIN", payload: admin}))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({type: "LOGOUT"})
  }
}



  