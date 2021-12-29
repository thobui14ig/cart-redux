import types from "./shopping-types";

export const addToCart = (itemID) => {
    return {
        type: types.addToCart,
        payload: {
            id: itemID
        },
    };
};