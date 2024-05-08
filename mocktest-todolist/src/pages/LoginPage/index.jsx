import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mx-auto mt-5">
            <h1 className="text-center">Login Page</h1>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
