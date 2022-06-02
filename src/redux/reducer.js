const initialState = {
    donations: [],
    // selectedDonations: []
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_DONATIONS":
          return {...state, donations: action.payload};
        // case "SELECTED_DONATIONS":
        //     return {...state, selectedDonations: action.payload}
        default:
            return {...state}
    }
}
