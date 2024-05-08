import { Card } from "react-bootstrap";

export default function TodoCard({ children }) {
  return (
    <>
      <Card border="primary" className="my-2">
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
}
