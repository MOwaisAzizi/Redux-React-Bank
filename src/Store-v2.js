import { applyMiddleware, combineReducers, createStore } from "redux";
import acountReducer from "./Accounts/accountSplice";
import customerReducer from "./Customers/customerSplice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
   acount : acountReducer,
   customer : customerReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store




