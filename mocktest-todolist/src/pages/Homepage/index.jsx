import { Col, Container, Row } from "react-bootstrap";
import AddButton from "../../components/AddButton";
import Message from "../../components/Message";
import Navbar from "../../components/Navbar";
import TodoList from "../../components/TodoList";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Message />
      <Container>
        <Row>
          <Col xs={12} md={8} className="mx-auto">
            <TodoList />
          </Col>
        </Row>
      </Container>
      <AddButton />
    </>
  );
}
