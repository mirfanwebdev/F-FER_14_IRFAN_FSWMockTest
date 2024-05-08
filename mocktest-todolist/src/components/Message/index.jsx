import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Message() {
  const message = useSelector(
    (state) => state.delete.message || state.add.message
  );
  const [isDisplayed, setIsDisplayed] = useState(false);
  useEffect(() => {
    if (message) {
      setIsDisplayed(true);
      setTimeout(() => {
        setIsDisplayed(false);
      }, 3000);
    }
  }, [message]);
  return (
    <>
      {message && isDisplayed ? (
        <Card
          className="position-fixed top-0 end-0 z-2 mt-3"
          bg="success"
          text="white"
        >
          <Card.Body>
            <Card.Title className="text-center">Success</Card.Title>
            <Card.Text>{message}</Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
}
