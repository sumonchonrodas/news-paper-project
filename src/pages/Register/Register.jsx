import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);

  const [error, setError] = useState("");

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, photo, email, password);

    createUser(email, password)
      .then(result => {
        const createUser = result.user;
        setError("");
        console.log(createUser);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage) {
          setError("this email have an account.");
        }
        console.log(error);
      });
  };

  const handleTerms = e =>{
    setChecked(e.target.checked)
  }

  return (
    <Container className="mx-auto w-50">
      <h3 className="mb-4 text-center" style={{ marginTop: "1rem" }}>
        Please register
      </h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3 fw-bolder">
          <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            id=""
            placeholder="Enter your name"
            className="py-2 ps-4"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bolder">
          <Form.Label htmlFor="disabledTextInput">Photo URL</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            id=""
            placeholder="Enter your photo URL"
            className="py-2 ps-4"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bolder">
          <Form.Label htmlFor="">Gmail</Form.Label>
          <Form.Control
            name="email"
            type="email"
            id=""
            placeholder="Enter your gmail"
            className="py-2 ps-4"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bolder">
          <Form.Label htmlFor="">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            id="disabledTextInput"
            placeholder="Enter your password"
            className="py-2 ps-4"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            label={
              <small>
                accept <Link to="/terms">terms and conditions</Link>
              </small>
            }
          />
        </Form.Group>

        <Button
          type="submit"
          style={{
            width: "100%",
            border: "none",
            marginTop: "30px",
            padding: "15px"
          }}
          variant="dark"
          disabled={!checked}
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-success">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-danger" />
      </Form>
      <p className="text-danger">
        {error}
      </p>
    </Container>
  );
};

export default Register;
