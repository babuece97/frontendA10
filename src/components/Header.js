import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';



const Header = () => {
    return (
        <header>
           <Navbar bg="dark"  variant ='dark' expand="lg" collapseOnSelect>
               <Container>
  <Navbar.Brand href="/">Letsbuy</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/order">
          <i className= 'fas fa-shopping-cart'></i>Orderr
          </Nav.Link>
      <Nav.Link href="/admin">Adminn
      </Nav.Link>
      <Nav.Link href='/login'>
          <i className='fas fa-user'></i>Loginn
          </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </header>
    );
};

export default Header;