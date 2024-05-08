import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../../redux/featrues/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const username = localStorage.getItem("username");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    const result = dispatch(logout());
    if (result) {
      navigate("/login");
    }
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Hello {username}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
