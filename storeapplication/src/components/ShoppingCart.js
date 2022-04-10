import "./ShoppingCart.css";
import ShoppingBagImage from "../graphics/bag.svg";
import {useSelector} from "react-redux";
import { React, useState } from "react";
import ShoppingCartSummary from "../components/ShoppingCartSummary.js";


function ShoppingCart() {
    const [toggle, setToggle] = useState(false);
    //const counter = useSelector((state) => { return state.counter});

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
         <p className="cartCounter">{cartCounter.value}</p> {/*{counter} */}
      </div>
    </div>
  );
}

export default ShoppingCart;





