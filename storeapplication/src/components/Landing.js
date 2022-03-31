import "../components/Landing.css";
import { React, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate  } from "react-router-dom";
import "antd/dist/antd.css";
//import "antd/dist/antd.min.css";
import { Row, Col } from "antd";
import graphicLeft from "../graphics/intro-graphic-left.svg";
import graphicRight from "../graphics/intro-graphic-right.svg";
import logo from "../graphics/airbean-landing.svg";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/menu')
    }, 1500)
  }, []);

  return (
    <div className="landing">
      <Row className="rowClass">
        <Col className="left" xs={5} sm={5} md={5} lg={5} xl={5}>
          <img src={graphicLeft} className="graphicLeft" />
        </Col>
        <Col className="center" xs={14} sm={14} md={14} lg={14} xl={14}>
          <img src={logo} className="logoImg" />
        </Col>
        <Col className="right" xs={5} sm={5} md={5} lg={5} xl={5}>
          <img src={graphicRight} className="graphicRight" />
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
