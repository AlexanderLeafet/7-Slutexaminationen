import SummaryFooter from "./SummaryFooter.js";
import ShoppingCartItem from "./ShoppingCartItem.js";

import "./ShoppingCartSummary.css";

import { useSelector } from "react-redux";
import { React } from "react";
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.min.css";

function ShoppingCartSummary() {
  const addedProducts = useSelector((state) => state.products);
  const { Title } = Typography;

  return (
    <div className="summary">
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
          <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          {addedProducts.products.map((product) => {
            return (
              <ShoppingCartItem
                title={product.title}
                desc={product.desc}
                price={product.price}
                key={product.id}
                id={product.id}
                quantity={product.quantity}
              />
            );
          })}
          {/*  */}
        </Col>
      </Row>
      <SummaryFooter />
    </div>
  );
}

export default ShoppingCartSummary;
