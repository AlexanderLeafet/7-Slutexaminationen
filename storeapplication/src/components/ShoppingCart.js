import ShoppingCartSummary from "../components/ShoppingCartSummary.js";

import "./ShoppingCart.css";
import ShoppingBagImage from "../graphics/bag.svg";

import {useSelector} from "react-redux";
import { React, useState } from "react";

function ShoppingCart() {
    const [toggle, setToggle] = useState(false);

    const cartCounter = useSelector((state) => state.cartCounter);
  return (
    <div className="shoppingCart">
      <button className="cartCircle"></button>
      <img className="shoppingBagImage" src={ShoppingBagImage}  onClick={() => setToggle(!toggle)}></img>
      {toggle ? (
    <>
      <ShoppingCartSummary/>
    </>
  ) : null}
      <div className="countCircle">
         <p className="cartCounter">{cartCounter.value}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;





