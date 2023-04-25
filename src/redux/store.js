import { legacy_createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"

import { product_reducer } from "./product_redux/product_reducer";

let rootreducer=combineReducers({
    product:product_reducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

 