import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";


export const NavBar = () =>{
    return <> <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" id="logo">Ks.Belleza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" bg= "danger"><strong>Cabello</strong></Nav.Link>
            <Nav.Link href="#features"><strong>Piel</strong></Nav.Link>
            <Nav.Link href="#pricing"><strong>Fragancia</strong></Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    
    </>;
}