import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#about">John Martin</Navbar.Brand>
                <Nav>
                <Link to="/" className="App-link">About Me</Link> | {" "}
                <Link to="/portfolio" className="App-link">Portfolio</Link> | {" "}
                <Link to="/Contact" className="App-link">Contact</Link> | {" "}
                <Link to="/Resume" className="App-link">Resume</Link> | {" "}
                </Nav>
                </Container>
            </Navbar>
    )
}