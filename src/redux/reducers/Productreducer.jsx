import { ActionType } from "../constants/acttion-type";

const intialState = {
    products : []
}

export const productsReducer = (state = intialState,{ type, payload }) => {
    switch (type) {
      case ActionType.SET_PRODUCTS:
        return {...state, products: payload};
    default:
        return state;
        
    }
  };