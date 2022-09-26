import React from 'react'
import { useDispatch } from 'react-redux'
import {BsFillXSquareFill} from "react-icons/bs";
import { removeFromCart } from '../../redux/actions/cartActions'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CartDonation = ({ donation }) => {

  const {id, size, image_url, title, brand, department, shipping_price} = donation

    const dispatch = useDispatch()

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img src={image_url} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{brand}</Card.Text>
          <Card.Text>{department}</Card.Text>
          <Card.Text>{size}</Card.Text>
          <Card.Text>${shipping_price}</Card.Text>
          <Button variant="secondary" onClick={() => dispatch(removeFromCart(id))}
            className='dtl-cart-item'>
              <BsFillXSquareFill/>
          </Button>
        </Card.Body>
      </Card>
    )
}

export default CartDonation
