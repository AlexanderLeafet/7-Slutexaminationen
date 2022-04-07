import "./ShoppingCartSummary.css";
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.min.css";
import ShoppingCartItem from "./ShoppingCartItem.js";
import {useSelector} from "react-redux";

function ShoppingCartSummary() {

  const addedProducts = useSelector((state) => state);
   console.log("summary: ", addedProducts);

    const { Title } = Typography;
  return (
    <div className="summary">
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title level={2} className="menuTitle">
            Din beställning
          </Title>
          {addedProducts.products.map((product) => {
            console.log(product)
            if (product.id != "7") {
              return (
                <ShoppingCartItem
                  title={product.title}
                  desc={product.desc}
                  price={product.price}
                  id={product.id}
                  quantity={product.quantity}
                />
              );
            }
          })}
          {/*  */}
        </Col>

        </Row>
    </div>
  );
}

export default ShoppingCartSummary;
