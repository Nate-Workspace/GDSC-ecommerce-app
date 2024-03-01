import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ItemContext } from '../../context/item-context';
import { CartItem } from './cart-item';
import "./cartcss.css"
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
  const { cartItems, getTotalPrice}= useContext(ItemContext)
  const totalAmount=getTotalPrice();
  const navigatioin=useNavigate();

  function checkedOut(){
    window.alert('Order Successfull!!  Make another order now!')
    function navigate(){ navigatioin("/Items");}
    navigate();
  }

  return (
    <div className='cart'>
      <div className='cartHeader'>
        <h1>Your Cart</h1>
        <h4>Not ready to checkout?</h4>
        <h3 onClick={()=>navigatioin("/Items")}>Continue Shoping</h3>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div className="checkout">
        {totalAmount!=0 && <div>
          <p>Total price: $ {totalAmount}</p>
          <button onClick={checkedOut}>Checkout</button>
        </div>}
        {totalAmount ==0 && <h3> Nothing in the cart yet! </h3>}
        
        
      </div>
      <hr class="cart-line"/>
      <div className="gap"></div>
    </div>
  )
}

