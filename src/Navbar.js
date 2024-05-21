import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css'




function BasicExample() {
  return (
    <>
    <div className="nav">

    <Navbar expand="lg" className="bg-body-tertiary">
        <Container className ="gap-5" style={{width:"1000px"}}>y
          <Navbar.Brand href="#home"><h3 style={{fontFamily:"serif"}}>PORTFOLIO</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" gap-5">
            
                
              <Link style={{textDecoration:"none"}} to='/home'>
                <h1 style={{fontSize:"20px",color:'black',fontFamily:"serif"}}>Home</h1>
              </Link>
               
            
               
               <Link style={{textDecoration:"none"}} to='/ABOUT'>
                <h1 style={{fontSize:"20px",color:'black',fontFamily:"serif"}}>About</h1>
              </Link>
               
              


             
             <Link  style={{textDecoration:"none"}}to='/Qualification'>
                <h1 style={{fontSize:"20px",color:'black',fontFamily:"serif"}}>Qualification</h1>
              </Link>

             

            
              <Link style={{textDecoration:"none"}} to='/Skills'>
                <h1 style={{fontSize:"20px",color:'black',fontFamily:"serif"}}>Skills</h1>
              </Link>
             


            
             <Link style={{textDecoration:"none"}}to='/Contact'>
                <h1 style={{fontSize:"20px", color:'black',fontFamily:"serif"}}>Contact</h1>
              </Link>

            
             <Link style={{textDecoration:"none"}} to='/Resume'>
                <h1 style={{fontSize:"20px", color:'black',fontFamily:"serif"}}>Resume</h1>
              
              </Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-5">
            
                
              <Link style={{textDecoration:"none"}} to='/home'>
                <h1 style={{fontSize:"20px",color:'black'}}>Home</h1>
              </Link>
               
            
               
               <Link style={{textDecoration:"none"}} to='/ABOUT'>
                <h1 style={{fontSize:"20px",color:'black'}}>About</h1>
              </Link>
               
              


             
             <Link  style={{textDecoration:"none"}}to='/Qualification'>
                <h1 style={{fontSize:"20px",color:'black'}}>Qualification</h1>
              </Link>

             

            
              <Link style={{textDecoration:"none"}} to='/Skills'>
                <h1 style={{fontSize:"20px",color:'black'}}>Skills</h1>
              </Link>
             


            
             <Link style={{textDecoration:"none"}}to='/Contact'>
                <h1 style={{fontSize:"20px", color:'black',animation:"infinite"}}>Contact</h1>
              </Link>

            
             <Link style={{textDecoration:"none"}} to='/Resume'>
                <h1 style={{fontSize:"20px", color:'black'}}>Resume</h1>
              
              </Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
  
    </>
  );
}

export default BasicExample;
