const initialState = {
    donations: [],
    selectedDonations: {
        id: null,
        brand: "",
        department: "",
        size: "",
        title: "",
        image_url: "",
        available: "",
        shipping_price: ""
    }
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_DONATIONS":
          return {...state, donations: action.payload};
        case "GET_DONATION":
            return {...state, selectedDonations: action.payload}
        default:
            return {...state}
    }
}
