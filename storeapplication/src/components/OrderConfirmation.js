import { clearProductsFromCart } from "../reducers/productSlice";
import { resetCartCounter } from "../reducers/cartCounterSlice";

import "./OrderConfirmation.css";
import droneImage from "../graphics/drone.svg";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.min.css";


function OrderConfirmation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  function acceptConfirmation() {
    navigate("/menu");
    dispatch(clearProductsFromCart());
    dispatch(resetCartCounter());
  }

  const {state} = useLocation();
  const { eta, orderNr } = state;
  return (
    <div className="orderConfirmation">
      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
        <Col
          xs={14}
          sm={14}
          md={14}
          lg={14}
          xl={14}
          style={{ marginBottom: "1em" }}
        >
          <div className="orderTextWrapper">
            <p className="orderNumberText commonOrdernumberClass">Ordernummer</p>
            <p className="orderNumberValueText commonOrdernumberClass">#{orderNr}</p>
          </div>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
      </Row>

      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
        <Col
          xs={14}
          sm={14}
          md={14}
          lg={14}
          xl={14}
          style={{ textAlign: "center" }}
        >
          <img src={droneImage} alt="Droneimage" style={{ marginTop: "1em" }} />
        </Col>
        <Col className="left" xs={5} sm={5} md={5} lg={5} xl={5}></Col>
      </Row>

      <Row>
      <Col className="left" xs={4} sm={4} md={4} lg={4} xl={4}></Col>
        <Col
          xs={16}
          sm={16}
          md={16}
          lg={16}
          xl={16}
          style={{ textAlign: "center" }}
        >
          <h1 className="orderText" >
            Din beställning är påväg!
          </h1>
        </Col>
        <Col className="left" xs={4} sm={4} md={4} lg={4} xl={4}></Col>
      </Row>

      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
        <Col
          xs={14}
          sm={14}
          md={14}
          lg={14}
          xl={14}
          style={{ textAlign: "center" }}
        >
          <div className="timeForDeliveryWrapper">
            <p className="minutesValueText" style={{ color: "white", fontWeight: 600 }}>{eta}</p>
            <p className="minutesText commonOrdernumberClass">minuter</p>
          </div>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
      </Row>
      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
        <Col
          xs={14}
          sm={14}
          md={14}
          lg={14}
          xl={14}
          style={{ textAlign: "center" }}
        >
          <Button
            className="acceptConfirmationBtn"
            type="primary"
            shape="round"
            onClick={acceptConfirmation}
            size={10}
            style={{ marginTop: "1.5em" }}
          >
            Ok, cool!
          </Button>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}></Col>
      </Row>
    </div>
  );
}

export default OrderConfirmation;
