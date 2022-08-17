// const initialState = {
//     cartDonations: [],
//     cart: []
// }

// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             const donation = state.cartDonations.find(
//                 (donation) => donation.id === action.payload.id 
//              )
//              const inCart = state.cart.find((donation) =>
//                 donation.id === action.payload.id ? true : false
//              )

//              return {
//                 ...state,
//                 cart: inCart
//                 ? state.cart.map((donation) => 
//                     donation.id === action.payload.id
//                     ? { ...donation, qty: donation.qty + 1 }
//                     : donation
//                 )
//                 : [...state.cart, { ...donation, qty: 1}],
//              }
//         default:
//             return {...state}
//     }
// }

// export default cartReducer


// // const cartReducer = (state = initialState, action) => {
// //     switch (action.type) {
// //         case "ADD_TO_CART":
// //             return {...state, donations: action.payload};
// //         default:
// //             return {...state}
// //     }
// // }