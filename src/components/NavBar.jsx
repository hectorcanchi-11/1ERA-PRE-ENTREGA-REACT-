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
            <Nav.Link as ={NavLink} to="/category/Cuidado-de-la-piel" bg= "danger"><strong>Cuidado De La Piel</strong></Nav.Link>
            <Nav.Link as ={NavLink} to="/category/Maquillaje"><strong>Maquillaje</strong></Nav.Link>
            <Nav.Link as ={NavLink} to="/category/fragancia"><strong>Fragancia</strong></Nav.Link>
            <Nav.Link as ={NavLink} to="/category/Ropa"><strong>Ropa</strong></Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    
    </>;
}