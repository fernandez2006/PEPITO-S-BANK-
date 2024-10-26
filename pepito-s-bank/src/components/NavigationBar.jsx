import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Pepito-s-Bank</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categoria">Categoria</Nav.Link>
          <Nav.Link as={Link} to="/gasto">Gasto</Nav.Link>
          <Nav.Link as={Link} to="/metodopago">Metodos de pago</Nav.Link>
          <Nav.Link as={Link} to="/usuario">Usuario</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
