import {Container,Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"
export default function Menu() {
  return (
    <Navbar expand="sm" className={'$nav.gradiente'} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}