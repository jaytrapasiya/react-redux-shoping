import { combineReducers } from "redux";
import { productsReducer } from "./Productreducer";
import { CartReducer } from "./Cartreducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    allCartItems: CartReducer
});
export default reducers