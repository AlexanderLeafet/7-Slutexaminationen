import "../components/MenuItem.css";
import React from "react";
import addImg from "../graphics/add.svg";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import {increment, decrement} from "../actions/CounterActions";
import {useDispatch} from "react-redux";
import {addProduct} from "../reducers/productSlice";
function MenuItem({ title, desc, price, id, quantity }) {

  const dispatch = useDispatch();

  // function IncreaseCartCounter(){
  //   dispatch(increment(1));
  // }

  function AddToCart(title, price, desc, id, quantity){
    // IncreaseCartCounter();
    dispatch(addProduct({
      title: title,
      price: price,
      desc: desc,
      id: id,
      quantity: quantity
    }))
  }

  return (
    <div className="menuItem">
      <Row>
        <Col className="left" xs={2} sm={2} md={2} lg={2} xl={2} />
        <Col className="left" xs={3} sm={3} md={3} lg={3} xl={3}>
          <div className="circle">
            <img src={addImg} className="addImg" onClick={() => AddToCart(title, price, desc, id, quantity)} alt="+"/>
          </div>
        </Col>
        <Col
          className="center"
          xs={14}
          sm={14}
          md={14}
          lg={14}
          xl={14}
          style={{ marginBottom: "1em" }}
        >
          <h3 className="itemHeader">{title}</h3>
          <p className="underLine">....................</p>
          <p style={{ textAlign: "left", fontsize: "1em" }}>{desc}</p>
        </Col>
        <Col className="right" xs={5} sm={5} md={5} lg={5} xl={5}>
          <h3 className="itemHeader">
            {price} kr
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default MenuItem;
