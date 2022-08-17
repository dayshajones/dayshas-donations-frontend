const initialState = {
    allDonations: [],
    cart: []
    // selectedDonations: {
    //     id: null,
    //     brand: "",
    //     department: "",
    //     size: "",
    //     title: "",
    //     image_url: "",
    //     available: "",
    //     shipping_price: ""
    // }
}

export default function donationReducer(state=initialState, action){
    switch (action.type){
        case "GET_DONATIONS":
          return {...state, allDonations: action.payload};
        case "GET_DONATION":
            return {...state, selectedDonations: action.payload}
        case "ADD_TO_CART":
            // get the donation data from the donations array
            const donation = state.allDonations.find(
                (donation) => donation.id === action.payload.id 
             )
             // check if donation is already in the cart
             const inCart = state.cart.find((donation) =>
                donation.id === action.payload.id ? true : false
             )
             return {
                ...state,
                cart: inCart
                ? state.cart.map((donation) => 
                    donation.id === action.payload.id
                    ? { ...donation, qty: donation.qty + 1 }
                    : donation
                )
                : [...state.cart, { ...donation, qty: 1}],
             }
        default:
            return {...state}
    }
}