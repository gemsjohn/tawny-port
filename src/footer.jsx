import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

export const Footer = () => {
    return (
        <div className="footer">
            <Navbar className="footer-center">
                <Nav>
                    <Nav.Link href="https://github.com/gemsjohn"><img src={github} className="icon" alt=""></img></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/johnathan-martin-9a3813159/"><img src={linkedin} className="icon" alt=""></img></Nav.Link>
                </Nav>
                    
            </Navbar>
        </div>
        
    )
}