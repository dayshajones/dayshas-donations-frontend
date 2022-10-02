const initialDonation = {
        id: "",
        title: "",
        brand: "",
        size: "",
        department: "",
        image_url: "",
        available: "",
        shipping_price: null,
        admin_id: ""
}

const initialState = {
    allDonations: [],
    cart: [],
    currentDonation: initialDonation,
    admin: {
        name: '',
        id: ''
    },
}

export default function Reducer(state=initialState, action){

    switch (action.type){
        case "GET_DONATIONS":
          return {...state, allDonations: action.payload};
        // state.allDonations = action.payload
        // return state
        case "GET_DONATION":
            return {...state, currentDonation: action.payload}
        case "ADD_TO_CART":
            const exists = state.cart.find(d => d.id === action.payload.id);
            if(exists)
            return {...state}
            else
            return {
                ...state,
                 cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((donation) => donation.id !== action.payload.id),
            }
        case "LOAD_DONATION":
            return {...state, currentDonation: action.payload }
        case "ADD_DONATION":

            return {
                ...state, currentDonation: action.payload, 
                allDonations: [...state.allDonations, action.payload]
            }
        case "DELETE_DONATION":
            return {...state, 
                allDonations: state.allDonations.filter(
                    donation => donation.id !== action.payload)
                }
        case "SET_ADMIN":
            return {...state, admin: action.payload}
            case "LOGOUT":
                return {...state, admin: ""}
        default:
            return {...state}
    }
}