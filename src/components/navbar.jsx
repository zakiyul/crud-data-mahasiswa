import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const NavbarComp = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="p-3">
        <div className="container">
          <Navbar.Brand href="#home">
            <strong>
              Mahasiswa <FontAwesomeIcon icon={faUsers} />{" "}
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/" className="nav-link">Home</Link>
              </Nav.Link>
              <Nav.Link href="#link"><Link to="/about" className="nav-link">About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComp;
