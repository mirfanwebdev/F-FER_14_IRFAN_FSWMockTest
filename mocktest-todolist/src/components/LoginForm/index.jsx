import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../../redux/featrues/auth/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  // const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    } else if (event.target.id === "pin") {
      setPin(event.target.value);
    }
  };

  const handleAuth = (payload) => {
    const username = payload.username;
    const pin = payload.pin;
    const pinAuth = RegExp("^[0-9]{6}$").test(pin);

    if (pinAuth) {
      return { username: username, isAuth: true };
      // return console.log(true);
    } else return false;
    // console.log(pin);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username: username,
      pin: pin,
    };
    // console.log(payload);
    const verified = handleAuth(payload);
    // console.log(verified);
    const result = dispatch(login(verified));
    if (result) {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username/email</Form.Label>
        <Form.Control
          // id="username"
          onChange={handleChange}
          type="text"
          placeholder="Masukkan username atau email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pin">
        <Form.Label>PIN</Form.Label>
        <Form.Control
          // id="pin"
          onChange={handleChange}
          type="password"
          placeholder="Masukkan PIN (6 angka)"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
