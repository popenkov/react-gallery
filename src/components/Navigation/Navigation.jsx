//core
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//users
import styles from "./Navigation.module.scss";
function Navigation() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Link to="/" className={styles.link}>
          Gallery
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about-me" className={styles.link}>
          About me
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
