import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";


export const NavBar = () =>{
    return <> <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as ={NavLink} to="/" id="logo">Ks.Belleza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as ={NavLink} to="/category/deportes" bg= "danger"><strong>Deportes</strong></Nav.Link>
            <Nav.Link as ={NavLink} to="/category/zapatos"><strong>Zapatos</strong></Nav.Link>
            <Nav.Link as ={NavLink} to="/category/mochilas"><strong>Mochilas</strong></Nav.Link>
            <Nav.Link as ={NavLink} to="/category/ropa"><strong>Ropa</strong></Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    
    </>;
}