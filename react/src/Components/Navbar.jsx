import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavegadorSuperior() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Secciones">Secciones</Nav.Link>
            <Nav.Link href="Registracion">Registracion</Nav.Link>
            <Nav.Link href="Contacto">Contacto</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavegadorSuperior;