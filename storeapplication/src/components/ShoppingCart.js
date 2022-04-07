import "./ShoppingCart.css";
import ShoppingBagImage from "../graphics/bag.svg";
import {useSelector} from "react-redux";
import { React, useState } from "react";
import ShoppingCartSummary from "../components/ShoppingCartSummary.js";


function ShoppingCart() {

    const [toggle, setToggle] = useState(true);
    const counter = useSelector((state) => { return state.counter});
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
         <p className="cartCounter">1</p> {/*{counter} */}
      </div>
    </div>
  );
}

export default ShoppingCart;





