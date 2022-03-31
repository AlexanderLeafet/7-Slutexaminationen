import "../components/Menu.css";
import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import graphicHeader from "../graphics/graphics-header.svg";
import graphicFooter from "../graphics/graphics-footer.svg";
import MenuItem from "../components/MenuItem.js";
import ShoppingCart from "../components/ShoppingCart.js";

function Menu() {
  const { Title } = Typography;
  const [products, setProducts] = useState([{}]); // const [products, setProducts] = useState([{}]);


  async function getProducts() {
    const response = await fetch("http://localhost:5000/api/beans");
    const data = await response.json();
    setProducts(data.menu);
    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="menu">
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
          <img className="headerImg" src={graphicHeader} />
          <ShoppingCart/>
        </Col>
      </Row>
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
          <Title level={1} className="menuTitle">
            Meny
          </Title>
        </Col>
      </Row>
      <Row>
        <Col className="left" xs={24} sm={24} md={24} lg={24} xl={24}>
          {products.map((product) => {
            if (product.id != "7") {
              return (
                <MenuItem
                  title={product.title}
                  desc={product.desc}
                  price={product.price}
                  key={product.id}
                />
              );
            }
          })}
        </Col>
      </Row>

      <img className="footerImg" src={graphicFooter} />
    </div>
  );
}

export default Menu;
