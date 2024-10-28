import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance : 0,
    loan : 0,
    loanPurpose : '',
    isLoading:false
}

//this is a reducer and the cases are in reducers property
const acountSlice = createSlice({
      name:'acount',
      initialState,
      reducers:{
        deposit(state,action){
         state.balance += action.payload
         state.isLoading = false;

        },

        withdraw(state,action){
            state.balance -= action.payload
           },

           requestLoan:{
            //state is just one argument so cant send two state that is way use this tecnic
            prepare(amount,loanPurpose){
                return {
                    payload :{amount,loanPurpose}
                }
            },

           reducer(state,action) {
            if(state.loan> 0) return
            state.balance += action.payload.amount
            state.loan += action.payload.amount
            state.loanPurpose = action.payload.loanPurpose
         }
            
        },
             payLoan(state){
                state.balance -= state.loan
                state.loan = 0
                state.loanPurpose = ''
                  },
                  convertingCurrency(state) {
                    state.isLoading = true;
                  },
           }
      }
    )
    
    // export function deposit(amount, currency) {
    //   if (currency === "USD") return { type: "account/deposit", payload: amount };
      
    //   return async function (dispatch, getState) {
    //     dispatch({ type: "account/convertingCurrency" });
        
    //     const res = await fetch(
    //       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    //     );
    //     const data = await res.json();
    //     const converted = data.rates.USD;
        
    //     dispatch({ type: "account/deposit", payload: converted });
    //   };
    // }
    
    export const {deposit,withdraw,requestLoan,payLoan} = acountSlice.actions

//using redux way of thunk not toolkit way (createasyctthunk is the toolkit way)
// export  function deposit(amount,currency){
//     if(currency === 'USD') return {type:'acount/deposit',payload:amount}

//     //redux know if another method returned in a method its a thunk and shoud perform before go to store
//     return async function(dispatch,getState){
//       dispatch({type:'acount/loading'})
//     //API call
//    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
//    const data = await res.json()
//    const converted = data.rates.USD
   
//     dispatch({type:'acount/deposit',payload:converted})
//     //return action
    
//     }
//  }

export default acountSlice.reducer





// export default function acountReducer(state = initialStateAcount,action){
//     switch(action.type){
//         case 'acount/deposit' : return {...state,balance : state.balance + action.payload,isLoading:false}
//         case 'acount/withdraw' : return {...state,balance : state.balance - action.payload}
//         case 'acount/requestLoan' : if(state.loan> 0) return state; 
//          return {...state,loan : action.payload.amount,loanPurpose : action.payload.purpose,
//               balance : state.balance + action.payload.amount
//          }
//         case 'acount/payLoan' : return {...state,balance:state.balance - state.loan ,loanPurpose: '', loan:0}
//         case 'acount/loading' : return {...state,isLoading:true}

//          default : return state
//     }
// }

// export  function deposit(amount,currency){
//     if(currency === 'USD') return {type:'acount/deposit',payload:amount}

//     //redux know if another method returned in a method its a thunk and shoud perform before go to store
//     return async function(dispatch,getState){
//       dispatch({type:'acount/loading'})
//     //API call
//    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
//    const data = await res.json()
//    const converted = data.rates.USD
   
//     dispatch({type:'acount/deposit',payload:converted})
//     //return action
    
//     }
//  }


//  export  function withdraw(amount){
//      return {type:'acount/withdraw',payload:amount}
//   }
//   export  function requestLoan(amount,purpose){
//      return {type:'acount/requestLoan',payload : {amount : amount,purpose : purpose}}
//   }
//   export function payloan(){
//      return {type:'acount/payLoan'}
//   }
 
 
//  store.dispatch(deposit(100))
//  console.log(store.getState());
 
//  store.dispatch(withdraw(50))
//  console.log(store.getState());
 
//  store.dispatch(requestLoan(150,'bay a car'))
//  console.log(store.getState());
//  store.dispatch(payloan())
//  console.log(store.getState());