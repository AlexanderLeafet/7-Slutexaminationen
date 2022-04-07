import "../components/ShoppingCartItem.css";
import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "antd/dist/antd.min.css";
import arrowUp from "../graphics/arrow-up.svg";
import arrowDown from "../graphics/arrow-down.svg";

function ShoppingCartItem({ title, price, id, quantity }) {
  const { Title } = Typography;

//Bryta ut knapp + total till egen komponent

  return (
    <div className="ShoppingCartItem">
      <Row>
        <Col className="left" xs={2} sm={2} md={2} lg={2} xl={2} />
        <Col
          xs={18}
          sm={18}
          md={18}
          lg={18}
          xl={18}
          style={{ marginBottom: "1em" }}
        >
          <h3 className="itemHeader">{title}</h3>
          <p className="underlineSummary">....................</p>
          <p className="price">{price}kr</p>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}
         />
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <div className="quantity">
            <img src={arrowUp} className="arrowImage" />
            <p className="amount">{quantity}</p>
            <img src={arrowDown} className="arrowImage" />
          </div>
        </Col>
      </Row>

      <Row className="totalRow">
        <Col className="left" xs={2} sm={2} md={2} lg={2} xl={2} />
        <Col
          xs={16}
          sm={16}
          md={16}
          lg={16}
          xl={16}
          style={{ marginBottom: "1em" }}
        >
          <h3 className="totalHeader">Total{}</h3>
          <p className="underlineSummaryTotal">....................</p>

          <p className="taxText">inkl moms + drönarleverans</p>
        </Col>
        <Col className="left" xs={6} sm={6} md={6} lg={6} xl={6}>
          <h3 className="totalPrice">379 kr</h3>
        </Col>
      </Row>

      <Row className="buttonRow">
        <Col className="left" xs={3} sm={3} md={3} lg={3} xl={3} />
        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
        <Button className="submitButton"type="primary" shape="round"  size={10}>Take my money!</Button>
        </Col>
        <Col className="left" xs={3} sm={3} md={3} lg={3} xl={3} />
      </Row>
    </div>
  );
}

export default ShoppingCartItem;
