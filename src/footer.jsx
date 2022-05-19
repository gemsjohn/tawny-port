import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

export const Footer = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Nav className="footer">
                    <Nav.Link href="https://github.com/gemsjohn"><img src={github} className="icon"></img></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/johnathan-martin-9a3813159/"><img src={linkedin} className="icon"></img></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}