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

export const removeCartProduct = (productId) => {
    return {
        type: ActionType.REMOVE_CART_PRODUCT,
        payload: productId
    }
}