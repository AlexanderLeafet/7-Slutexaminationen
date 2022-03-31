import "./ShoppingCartSummary.css";
import { Row, Col, Typography } from "antd";

function ShoppingCartSummary() {
    const { Title } = Typography;
  return (
    <div className="summary">
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          <Title level={2} className="menuTitle">
            Din beställning
          </Title>
        </Col>

        </Row>
    </div>
  );
}

export default ShoppingCartSummary;
