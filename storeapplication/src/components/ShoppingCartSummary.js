import "./ShoppingCartSummary.css";
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.min.css";
import ShoppingCartItem from "./ShoppingCartItem.js";

function ShoppingCartSummary() {
    const { Title } = Typography;
  return (
    <div className="summary">
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          <ShoppingCartItem/>
        </Col>

        </Row>
    </div>
  );
}

export default ShoppingCartSummary;
