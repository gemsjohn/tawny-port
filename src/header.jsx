import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#about">John Martin</Navbar.Brand>
                <Nav className="me-auto">
                <Link to="/">About Me</Link> | {" "}
                <Link to="/portfolio">Portfolio</Link> | {" "}
                <Link to="/Contact">Contact</Link> | {" "}
                <Link to="/Resume">Resume</Link> | {" "}
                </Nav>
                </Container>
            </Navbar>
    )
}