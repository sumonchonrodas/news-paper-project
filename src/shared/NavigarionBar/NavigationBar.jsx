import { React, useContext } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () =>{
    logOut()
    .then((result) => {
      
    }).catch((err) => {
      
    });
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                to="/category/0"
                className="me-3"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Home
              </Link>
              <Link
                to="#pricing"
                className="me-3"
                style={{ textDecoration: "none", color: "gray" }}
              >
                About
              </Link>
              <Link
                to="#pricing"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Career
              </Link>
            </Nav>
            <Nav>
              <FaUser className='mt-2 me-2 fs-4'></FaUser>
              {user
                ? <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                : <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
