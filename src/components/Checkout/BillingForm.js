import React from "react";
import { useLocation } from "react-router-dom";

const BillingForm = ({name, setName, email, setEmail, address, handleAddressForm}) => {

    const {state} = useLocation()
    console.log({state})
    return (
        <>
        <h2>Total: ${state.total}</h2>
                <form>
                <h3>Customer Information:</h3>
                <label>
                    Email: <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Address: <input type="text" name="line1" value={address.line1} onChange={handleAddressForm}/>
                </label>
                <label>
                    City: <input type="text" name="city" value={address.city} onChange={handleAddressForm}/>
                </label>
                <label>
                    State: <input type="text" name="state" value={address.state} onChange={handleAddressForm} />
                    </label>
                <label>
                    Postal Code: <input type="text" name="postal_code" value={address.postal_code} onChange={handleAddressForm} />
                </label>
                <br />
                {/* <button onClick={handleClick}>Pay Now</button> */}
                </form>
                </>
    )
}

export default BillingForm