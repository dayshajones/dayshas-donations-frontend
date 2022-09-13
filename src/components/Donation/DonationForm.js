import React, {useState} from "react";
import { connect, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import {submitDonation} from '../../redux/actions/donationsAction'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DonationForm = ({submitDonation}) => {

    const [brand, setBrand] = useState('')
    const [department, setDepartment] = useState('')
    const [size, setSize] = useState('')
    const [title, setTitle] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [shipping_price, setShippingPrice] = useState('')
    const available = true

    const navigate = useNavigate()

    const adminId = useSelector((state) => state.admin.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newDonation = {brand, department, size, title, image_url, available, shipping_price, adminId}
        submitDonation(newDonation)
        navigate("/donations")
    }

    return (
        <div className="donation-form-container">
            <Form className="new-donation" onSubmit={handleSubmit}>
                <h2>Create Donation</h2>
                <Form.Group className="mb-3" controlId="DonationForm.ControlInput1">
                <Form.Control className="w-50" type="text" placeholder="Brand" 
                value={brand} onChange={(e) => setBrand(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="DonationForm.ControlInput1">
                <Form.Control className="w-50" type="text" placeholder="Department" 
                value={department} onChange={(e) => setDepartment(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="DonationForm.ControlInput1">
                <Form.Control className="w-50" type="text" placeholder="Size" 
                value={size} onChange={(e) => setSize(e.target.value)}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="DonationForm.ControlInput1">
                <Form.Control className="w-50" type="text" placeholder="Title" 
                value={title} onChange={(e) => setTitle(e.target.value)}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="DonationForm.ControlInput1">
                <Form.Control className="w-50" type="text" placeholder="Image URL" 
                value={image_url} onChange={(e) => setImageUrl(e.target.value)}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="DonationForm.ControlInput1">
                <Form.Control className="w-50" type="text" placeholder="Shipping Price" 
                value={shipping_price} onChange={(e) => setShippingPrice(e.target.value)}  />
                </Form.Group>

                <Button variant="light" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, {submitDonation})(DonationForm)
