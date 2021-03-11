import React from "react";
import cartService from "../../services/cart-service";
import productService from "../../services/products-service";


const Cart = ({ product, qty }) => {

    console.log('product', product)

  return (
    <div className="cartItem">
      <div className="">
        <figure>
          <img
            src={product.img}
        />
        </figure>
      </div>
      <div className="">
        <b>
          {product.name} <span className="">€{product.price}</span>
        </b>
        <div>{product.description}</div>
        <small>Amount: {product.qty}</small>
        <button onClick={()=> cartService.removeItem(product._id)} > Remove item </button>
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default Cart;