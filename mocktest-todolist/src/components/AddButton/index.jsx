import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <Link className="position-fixed bottom-0 end-0 m-4" to={"./add"}>
      <Button variant="primary" size="lg">
        Add
      </Button>
    </Link>
  );
}
