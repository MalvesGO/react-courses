import React, {useState} from 'react';
import CardItems from '../src/CardItems';
import Courses from '../src/Courses';
import Navbar from '../src/NavBar'

// https://www.youtube.com/watch?v=jo-IV8i5Gdk&list=PLeBknJ2kuv1mDABV2N-H2tcu1vbfffRvg&index=15

const ShopingCart = () => {

  const [cart, setCart] = useState([])

  function handleAddItemToCart(url, name, price){
    const itemObject = { url, name, price }
    setCart([...cart,itemObject])
  }

  function handleRemoveItemToCart(clickedItemIndex){
    const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem) != clickedItemIndex)
    setCart(filteredCart)
  }

  function clearCart(){
    setCart([])
  }

    return (
      <> 
      <Navbar cart={cart} clearCart={clearCart} />
      <Courses handleAddItemToCart={handleAddItemToCart} />
      <CardItems cart={cart} handleRemoveItemToCart={handleRemoveItemToCart} />      
      </>
    )
}

export default ShopingCart;