import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Container className=" d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="text-center">
              {/* Your content here */}
              <h1><i>Loading...</i></h1>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;

/**
 * ---------------------
 *          STEPS
 * ---------------------
 * 1. check user is logged in or not.
 * 2.if user logged in, then allow them visit to route.
 * 3.Else redirect the user to the login page.
 * 4.set the private router.
 * 5.hand leLoading.
 * */
