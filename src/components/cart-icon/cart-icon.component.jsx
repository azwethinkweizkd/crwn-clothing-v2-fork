import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartIconQuantity } =
    useContext(CartContext);
  const toggleOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartIconQuantity}</span>
    </div>
  );
};

export default CartIcon;
