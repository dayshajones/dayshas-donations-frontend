import React, {useState} from "react";
import { connect } from "react-redux";
import {submitDonation} from '../../redux/actions/donationsAction'

const DonationForm = ({adminId, submitDonation}) => {

    const [brand, setBrand] = useState('')
    const [department, setDepartment] = useState('')
    const [size, setSize] = useState('')
    const [title, setTitle] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [shipping_price, setShippingPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newDonation = {brand, department, size, title, image_url, shipping_price, adminId}
        submitDonation(newDonation)
    }

    return (
        <div className="donation-form-container">
            <form className="new-donation" onSubmit={handleSubmit}>
                <h2>Add a Donation:</h2>
                <label>
                Brand:
                <input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </label>
                <label>
                Department:
                <input type="text" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </label>
                <label>
                Size:
                <input type="text" name="size" value={size} onChange={(e) => setSize(e.target.value)} />
                </label>
                <label>
                Title:
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                Image URL:
                <input type="text" name="image_url" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <label>
                Shipping Price: $
                <input type="text" name="shipping_price" value={shipping_price} onChange={(e) => setShippingPrice(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    const adminId = state.admin ? state.admin.id : ""
    return {
        donationId: state.currentDonation.id,
        adminId
    }
}

export default connect(mapStateToProps, {submitDonation})(DonationForm)
