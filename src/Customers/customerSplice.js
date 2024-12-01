
import { createSlice } from "@reduxjs/toolkit";

////modern Way
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  //customer/createCustomer
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        ////TOLKIT WAY
        //with toolkit we mutate the state but not with simple redux
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;


////clasic way
// export default function customerReducer(state = initialStateCustomer,action){
//     switch(action.type){
//         case 'customer/createcustomer' : return {...state,fullName : 
//             action.payload.fullName
//              ,nationalID:action.payload.nationalID,createAt:action.payload.createAt}
//         case 'customer/updateName' :  return {...state, fullName : action.payload}
//          default : return state
//     }
// }


// export function createCustomer(fullName,nationalID){
//     return {type:'customer/createcustomer' , payload:{fullName,nationalID,createAt:new Date().toDateString()}}
//   }

//  export  function updateName(fullName){
//       return {type:'customer/updateName' , payload:fullName}
//     }
  
    // store.dispatch(createCustomer('Karim','1212'))
    // console.log(store.getState());
    
    // store.dispatch(updateName('morad'))
    // console.log(store.getState());