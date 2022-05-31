const initialState = {
    donations: []
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_DONATIONS":
          return {...state, donations: action.payload};
        default:
            return {...state}
    }
}
