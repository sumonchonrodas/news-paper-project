import React from "react";
import Header from "../shared/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "../shared/LeftNav/LeftNav";
import RightNav from "../shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../shared/NavigarionBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header />
      <NavigationBar></NavigationBar>

      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
