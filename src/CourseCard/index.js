import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CourseCard = ({img, title, price}) => {

    const {handleAddItemToCart} = useContext(CartContext)
    return (
        <div className="card">
            <img src={img} alt=""/>
            <h1>{title} - R$ {price}</h1>
            <button onClick={() => handleAddItemToCart(img, title, price)} >Adicionar</button>
        </div>
    )
}

export default CourseCard;