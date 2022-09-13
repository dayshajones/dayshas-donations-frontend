import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const BillingForm = ({name, setName, email, setEmail, address, handleAddressForm}) => {
    const {state} = useLocation()
    const navigate = useNavigate()
    const total = state.total

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/payment', { state: {total} });
    }

    return (
        <div className="billing">
        <h2>Total: ${state.total}</h2>
            <form className="billing-form">
                <h3>Customer Information:</h3>
                <label>
                    Email:<input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br/>
                <label>
                    Name:<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br/>
                <label>
                    Address:<input type="text" name="line1" value={address.line1} onChange={handleAddressForm}/>
                </label>
                <br/>
                <label>
                    City:<input type="text" name="city" value={address.city} onChange={handleAddressForm}/>
                </label>
                <br/>
                <label>
                    State:<input type="text" name="state" value={address.state} onChange={handleAddressForm} />
                </label>
                <br/>
                <label>
                    Zip Code:<input type="text" name="postal_code" value={address.postal_code} onChange={handleAddressForm} />
                </label>
                <br />
                <Button variant="outline-secondary" onClick={handleClick}>Proceed to Payment</Button>
            </form>
        </div>
    )
}

export default BillingForm