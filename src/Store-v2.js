import { applyMiddleware, combineReducers, createStore } from "redux";
import acountReducer from "./Accounts/accountSplice";
import customerReducer from "./Customers/customerSplice";
import { thunk } from "redux-thunk";

//this is for macking a Middleware or thunk fo http request so the thunk will perfotm before going to store
const rootReducer = combineReducers({
   acount : acountReducer,
   customer : customerReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store




