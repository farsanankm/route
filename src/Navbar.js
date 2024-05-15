import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';


function BasicExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-5">
              <Link to='/home'>
                <h1>Home</h1>
              </Link>

            
                <Link to='/ABOUT'>
                <h1>About</h1>
              </Link>
              


              <Link to='/Qualification'>
                <h1>Qualification</h1>
              </Link>


              <Link to='/Skills'>
                <h1>Skills</h1>
              </Link>


              <Link to='/Contact'>
                <h1>Contact</h1>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
  );
}

export default BasicExample;