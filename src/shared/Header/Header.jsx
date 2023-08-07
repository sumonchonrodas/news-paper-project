import { React, useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";


const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="this is log" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <h2 className="fw-semibold">
          {moment().format("dddd, MMMM Do, YYYY")}
        </h2>
      </div>

      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee speed={100} className="text-danger">
          I can be a React component, multiple React components, or just some
          text.... I can be a React component, multiple React components, or
          just some text....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
