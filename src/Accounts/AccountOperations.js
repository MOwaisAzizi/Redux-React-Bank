import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./accountSplice";
import { requestLoan } from "./accountSplice";
import { payLoan } from "./accountSplice";
import { withdraw } from "./accountSplice";


function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  
  const dispatch = useDispatch()  
  const {loan:currentLoan,loanPurpose:currentLoanPurpose,isLoading} = useSelector(store=>store.acount)  

  function handleDeposit() {
    if(!depositAmount) return
    dispatch(deposit(depositAmount,currency))
    // dispatch(deposit(depositAmount))
    setDepositAmount('')
    setCurrency('USD')
  }

  function handleWithdrawal() {
    if(!withdrawalAmount) return
    dispatch(withdraw(withdrawalAmount))
    setWithdrawalAmount('')

  }

  function handleRequestLoan() {
    if(!loanAmount || !loanPurpose) return
    dispatch(requestLoan(loanAmount,loanPurpose))
    setLoanAmount('')
    setLoanPurpose('')

  }

  function handlePayLoan() {
    dispatch(payLoan())
  }

  return (
    <div className="balanceContainer">
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          {/* <label>Deposit</label> */}
          <input
            type="number"
            placeholder="Deposit Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          {/* <select
            value={currency}
            onChange={(e) => setCurrency(+e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select> */}

          <button onClick={handleDeposit}>{isLoading ? 'loading...' : `Deposit ${depositAmount}`}</button>
        </div>

        <div>
          {/* <label>Withdraw</label> */}
          <input
            type="number"
            placeholder="Withdraw Amount"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          {/* <label>Request loan</label> */}
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
            style={{marginBottom:'3px'}}
          />
         
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          /> 
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

       {currentLoan > 0 && <div>
          <span style={{padding:'10px'}}>Pay back ${currentLoan}({currentLoanPurpose})</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
        }

      </div>
    </div>
  );
}

export default AccountOperations;
