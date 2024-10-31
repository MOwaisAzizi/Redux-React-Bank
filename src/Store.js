import { configureStore } from "@reduxjs/toolkit"
import acountReducer from "./Accounts/accountSplice"
import customerReducer from "./Customers/customerSplice"

//this way it automatically perform the thunk actions
const store = configureStore({
   reducer:{
   acount : acountReducer,
   customer : customerReducer
   }
})

export default store




