import React from "react";
import Button from 'react-bootstrap/Button';

const CardButton = () => {
    return (
        <>
         <style type="text/css">
        {`
    .btn-outline-secondary {
        background-color: #FA255E;
        color: white;
        border-color: #FA255E;
    }

    .btn-outline-secondary:hover {
        background-color: white;
        color:  #C39EA0;
        border-color: white;
    }
    `}
      </style>
        
      <Button variant="outline-secondary">Add to Cart</Button>
        </>
    )
}

export default CardButton