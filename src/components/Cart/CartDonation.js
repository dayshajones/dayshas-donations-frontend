import React from 'react'
import { connect } from 'react-redux'
import {BsFillXSquareFill} from "react-icons/bs";
import { removeFromCart } from '../../redux/actions/cartActions'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CartDonation = ({ donation, removeFromCart }) => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img src={donation.image_url} alt={donation.title} />
        <Card.Body>
          <Card.Title>{donation.title}</Card.Title>
          <Card.Text>{donation.brand}</Card.Text>
          <Card.Text>{donation.department}</Card.Text>
          <Card.Text>{donation.size}</Card.Text>
          <Card.Text>${donation.shipping_price}</Card.Text>
          <Button variant="secondary" onClick={() => removeFromCart(donation.id)}
            className='dtl-cart-item'>
              <BsFillXSquareFill/>
          </Button>
        </Card.Body>
      </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect (null, mapDispatchToProps)(CartDonation)
