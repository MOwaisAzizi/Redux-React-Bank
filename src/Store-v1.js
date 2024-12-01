import { combineReducers, createStore } from "redux";

const initialStateAcount = {
    balance : 0,
    loan : 0,
    loanPurpose : ''
}

const initialStateCustomer = {
    fullName : '',
    nationalID : '',
    createAt : ''
}

function acountReducer(state = initialStateAcount,action){
    switch(action.type){
        case 'acount/deposit' : return {...state,balance : state.balance + action.payload}
        case 'acount/withdraw' : return {...state,balance : state.balance - action.payload}
        case 'acount/requestLoan' : if(state.loan> 0) return state; 
         return {...state,loan : action.payload.amount,loanPurpose : action.payload.purpose,
              balance : state.balance + action.payload.amount
         }
        case 'acount/payLoan' : return {...state,balance:state.balance - state.loan ,loanPurpose: '', loan:0}

         default : return state
    }
}

function customerReducer(state = initialStateCustomer,action){
    switch(action.type){
        case 'customer/createcustomer' : return {...state,fullName : 
            action.payload.fullName
             ,nationalID:action.payload.nationalID,createAt:action.payload.createAt}
        case 'customer/updateName' :  return {...state, fullName : action.payload}

         default : return state
    }
}




const rootReducer = combineReducers({
   acount : acountReducer,
   customer : customerReducer
})
const store = createStore(rootReducer)

   function deposit(amount){
   return {type:'acount/deposit',payload:amount}
}
   function withdraw(amount){
    return {type:'acount/withdraw',payload:amount}
 }
   function requestLoan(amount,purpose){
    return {type:'acount/requestLoan',payload : {amount : amount,purpose : purpose}}
 }
 function payloan(){
    return {type:'acount/payLoan'}
 }


store.dispatch(deposit(100))
console.log(store.getState());

store.dispatch(withdraw(50))
console.log(store.getState());

store.dispatch(requestLoan(150,'bay a car'))
console.log(store.getState());
store.dispatch(payloan())
console.log(store.getState());

function createCustomer(fullName,nationalID){
  return {type:'customer/createcustomer' , payload:{fullName,nationalID,createAt:new Date().toDateString()}}
}
function updateName(fullName){
    return {type:'customer/updateName' , payload:fullName}
  }

  store.dispatch(createCustomer('Karim','1212'))
  console.log(store.getState());
  
  store.dispatch(updateName('morad'))
  console.log(store.getState());