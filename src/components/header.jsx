import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">John Martin</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
    )
}