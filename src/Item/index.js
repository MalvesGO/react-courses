import React, {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';

const Item = ({name, price, itemIndex}) => {
    
    const {handleRemoveItemToCart} = useContext(CartContext);

    return (
        <li>
            <h2 className="course-name">{name}</h2>
            <span className="course-price">RS {price}</span>
            <button className="remove-btn" onClick={() => handleRemoveItemToCart(itemIndex)}>Remover</button>
        </li>
    )
}

export default Item;