import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "../shared/LeftNav/LeftNav";
import RightNav from "../shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Footer />

        <Container>
          <Row>
            <Col lg={9}>
              <Outlet />
            </Col>
            <Col lg={3}>
              <RightNav />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewsLayout;
