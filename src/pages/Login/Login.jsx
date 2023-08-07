import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  let from = location.state?.from?.pathname || "/category/0";

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const createUser = result.user;
        console.log(createUser);
        navigate(from);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container className="mx-auto w-50">
      <h3 className="mb-4 text-center fw-bolder " style={{ marginTop: "6rem" }}>
        Loging your account
      </h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 fw-bolder">
          <Form.Label htmlFor="disabledTextInput">Gmail</Form.Label>
          <Form.Control
            name="email"
            type="email"
            id=""
            placeholder="Enter your mail address"
            required
            className="py-2 ps-4"
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bolder">
          <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            id=""
            placeholder="Enter your password"
            required
            className="py-2 ps-4"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            name="accept"
            type="checkbox"
            label="accept term and condition"
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          style={{
            width: "100%",
            border: "none",
            marginTop: "30px",
            padding: "15px"
          }}
        >
          Login
        </Button>
        <br />
        <Form.Text>
          Don't have an account ?
          <Link
            to="/register"
            className="text-danger"
            style={{ textDecoration: "none" }}
          >
            register
          </Link>
        </Form.Text>
        <Form.Text />
      </Form>
    </Container>
  );
};

export default Login;
