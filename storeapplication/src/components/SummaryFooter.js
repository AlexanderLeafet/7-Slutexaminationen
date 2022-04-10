import { Row, Col, Button } from "antd";
import "antd/dist/antd.min.css";
import { React, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./SummaryFooter.css";
import {Products} from "../reducers/productSlice";


function SummaryFooter(){
    const products = useSelector((state) => state.products.products)
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let totalVal = 0;
        for(let i = 0; i < products.length; i++) {
            totalVal+= products[i].price * products[i].quantity;
        }

         setTotalPrice(totalVal)
    }, [products]);

    return(
        <div className="summaryFooter">
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
          <h3 className="totalHeader">Total</h3>
          <p className="underlineSummaryTotal">....................</p>

          <p className="taxText">inkl moms + drönarleverans</p>
        </Col>
        <Col className="left" xs={6} sm={6} md={6} lg={6} xl={6}>
          <h3 className="totalPrice">{totalPrice}kr</h3>
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
    )
}

export default SummaryFooter;