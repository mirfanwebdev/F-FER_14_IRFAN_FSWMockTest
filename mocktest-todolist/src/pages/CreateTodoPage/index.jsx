import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../redux/featrues/add/addSlice";
import { Col, Container, Row } from "react-bootstrap";
import Message from "../../components/Message";
export default function CreateTodoPage() {
  const [form, setForm] = useState({ title: "" });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setForm({ title: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title: form.title,
    };
    dispatch(addTodoList(payload));
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mx-auto mt-5">
            <Message />
            <h1 className="text-center">Create Todo Page</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Todo List Title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  placeholder="Tambahkan to do list"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
