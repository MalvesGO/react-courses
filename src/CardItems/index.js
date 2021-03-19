import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Item from '../Item'

const CardItems = () => {

    const {cart} = useContext(CartContext);

    return (
        <footer>
            <ul>
                {cart.map((cartItem, index) => 
                    <Item 
                    key={index}
                    itemIndex={index}
                    name={cartItem.name} 
                    price={cartItem.price}                     
                    />
                )}
            </ul>
        </footer>
    )
}

export default CardItems;