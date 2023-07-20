import React from 'react';
import cardwidget from '../../assets/carritoDeCompras.png';
import { Button } from 'bootstrap-4-react';
import cardWidget from '../cartWidget/cartWidget.css'
const CartWidget = () => {
    return (
        <div>
            <img src={cardwidget} alt="logo carrito" />
            <p>1</p>
            <Button success outline>Success</Button>
        </div>
    );
};

export default CartWidget;
