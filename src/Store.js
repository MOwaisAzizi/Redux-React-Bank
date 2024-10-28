import { configureStore } from "@reduxjs/toolkit"
import acountReducer from "./Accounts/accountSplice"
import customerReducer from "./Customers/customerSplice"

const store = configureStore({
   reducer:{
   acount : acountReducer,
   customer : customerReducer
   }
})

export default store




