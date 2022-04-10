import "../components/ShoppingCartItem.css";
import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "antd/dist/antd.min.css";
import arrowUp from "../graphics/arrow-up.svg";
import arrowDown from "../graphics/arrow-down.svg";
import {
  incrementProductQuantity,
  decrementProductQuantity,
  removeProduct
} from "../reducers/productSlice";
import {incrementCartCounter, decrementCartCounter} from "../reducers/cartCounterSlice";
import { useDispatch } from "react-redux";


function ShoppingCartItem({ title, price, quantity, id}) {
  const dispatch = useDispatch();

  function incrementQuantity() {
    dispatch(
      incrementProductQuantity({
        id: id
      })
    );

    dispatch(
      incrementCartCounter()
    );
  }

  function decrementQuantity() {
    dispatch(
      decrementProductQuantity({
        id: id
      })
    );

    if(quantity === 1){
      dispatch(
        removeProduct({
          id: id
        })
        )
    };

    dispatch(
      decrementCartCounter()
    );
  }

  return (
    <div className="ShoppingCartItem">
      <Row>
        <Col className="left" xs={2} sm={2} md={2} lg={2} xl={2} />
        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
          <h3 className="itemHeader">{title}</h3>
          <p className="underlineSummary">....................</p>
          <p className="price">{price}kr</p>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} />
        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="quantityColumn">
          <div className="quantity">
            <img
              src={arrowUp}
              className="arrowImage"
              onClick={incrementQuantity}
            />
            <p className="amount">{quantity}</p>
            <img
              src={arrowDown}
              className="arrowImage"
              onClick={decrementQuantity}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ShoppingCartItem;
