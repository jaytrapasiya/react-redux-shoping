import { combineReducers } from "redux";
import { productsReducer } from "./Productreducer";

const reducers = combineReducers({
    allProducts: productsReducer,
});
export default reducers