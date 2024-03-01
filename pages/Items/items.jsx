import React from 'react'
import {PRODUCTS} from "../../products"
import {Product} from "./product"
import "./item.css"


export const Items = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1> Our products </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />
            laboris nisi ut aliquip ex ea commodo consequat. <br />
            </p>
        </div>
        <br />
        <div className="products">
            {PRODUCTS.map((product)=> (
            <Product data={product}/>
            ))}
        </div>
        <hr class="horizontal-line"/>
        <div className="gap"></div>
    </div>
  )
}
