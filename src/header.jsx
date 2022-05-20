import { Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import name from './assets/name_logo.png';

export const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" className="App-header">
                <Navbar.Brand href="#home">
                    <img
                        src={name}
                        width="50"
                        height="50"
                        className="d-inline-block align-top App-header-brand"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Col className="App-header-nav">
                    <Nav>
                        <Link to="/" className="App-link">About Me</Link>
                        <Link to="/portfolio" className="App-link">Portfolio</Link>
                        <Link to="/Contact" className="App-link">Contact</Link>
                        <Link to="/Resume" className="App-link">Resume</Link>
                    </Nav>
                </Col>
            </Navbar>
        </div>
    )
}