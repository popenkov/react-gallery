import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link>
          <Link to="/">Gallery</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link to="/about-me">About me</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
