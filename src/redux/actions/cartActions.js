export const addToCart = (donation) => {
    return {
        type: "ADD_TO_CART",
        payload: donation
    }
}

export const loadDonation = (donation) => {
    return {
        type: "LOAD_DONATION",
        payload: donation,
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
