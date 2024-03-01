import React, { useContext } from 'react'
import { ItemContext } from '../../context/item-context';

export const Product = (props) => {
    const {id, productName, price,productImage} = props.data;
    const {addToCart, cartItems }= useContext(ItemContext)

    const cartItemAmount= cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={()=>addToCart(id)}>
        Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}
