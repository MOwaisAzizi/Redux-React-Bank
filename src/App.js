import CreateCustomer from "./Customers/CreateCustomer";
import Customer from "./Customers/Customer";
import AccountOperations from "./Accounts/AccountOperations";
import BalanceDisplay from "./Accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector(store => store.customer.fullName)

  return (
    <div className="containerAll">
      <h1>🏦 The React-Redux Bank</h1>
      <div className="container">{
        fullName === '' ? <CreateCustomer /> :
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
}</div>
    </div> 
  );
}

export default App;
