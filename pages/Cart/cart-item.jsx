import React, { useContext } from "react";
import { ItemContext } from "../../context/item-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart }= useContext(ItemContext)

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p className="itemName">
          <b>{productName}</b>
        </p>
        <p className="price"><b>${price}</b></p>
        <div className="countHandler">
          <p>Quantity: {cartItems[id]}</p> 
          <button onClick={()=>removeFromCart(id)}> Remove </button>
          <button onClick={()=> addToCart(id)}> Add </button>
        </div>
      </div>
    </div>
  );
};
