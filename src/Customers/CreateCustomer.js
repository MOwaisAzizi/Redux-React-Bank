import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSplice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  //using useDispatch we send dispath to store
  const dispatch = useDispatch()

  function handleClick() {
    if(!fullName || !nationalId) return prompt('please fill the inputs')
    dispatch(createCustomer(fullName,nationalId))
  }

  return (
    <div className="createCustomer">
      <h2>Create new customer</h2>
      <div className="inputsCustomer">
        <div>
          <label>Customer full name</label>
          <input className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input className="input"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button className="submit" onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
