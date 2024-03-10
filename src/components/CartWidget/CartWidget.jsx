import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    
    return (
        <div>
            <img src="../../../public/assets/img/foto.png" alt="Carrito de compras"/>

            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
        </div>
    );
};

export default CartWidget