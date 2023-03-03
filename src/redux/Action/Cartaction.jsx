import { ActionType } from "../constants/acttion-type";

export const addToCart = (products) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: products
    }
}

export const qtyIncrementProduct = (productId) => {
    return {
        type: ActionType.QTY_INCREMENT_PRODUCT,
        payload: productId
    }
}

export const qtyDecrementProduct = (productId) => {
    return {
        type: ActionType.QTY_DECREMENT_PRODUCT,
        payload: productId
    }
}