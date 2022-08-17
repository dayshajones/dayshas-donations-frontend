export const addToCart = (donationId) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            id: donationId,
        },
    }
}

export const removeFromCart = (donationId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: {
            id: donationId,
        },
    }
}