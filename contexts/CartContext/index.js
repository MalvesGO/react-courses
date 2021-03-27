import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [enabled, setEnabled] = useState(true);

  function handleAddItemToCart(url, name, price) {
    const itemObject = { url, name, price };
    setCart([...cart, itemObject]);
  }

  function handleRemoveItemToCart(clickedItemIndex) {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) != clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  // }

  return (
    <CartContext.Provider
      value={{
        cart,
        enabled,
        handleAddItemToCart,
        handleRemoveItemToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
