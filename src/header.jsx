import { Navbar, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import name from './assets/name_logo.png';

export const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" className="App-header">
                <Col>
                <img
                    src={name}
                    width="50"
                    height="50"
                    className="d-inline-block align-top App-header-brand"
                    alt="React Bootstrap logo"
                />
                </Col>
                <Col className="App-header-nav">
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? '#000000' : '#ffffff',
                        background: isActive ? '#92edf3' : '',
                        borderRadius: '10px',
                    })}
                    className="App-link"
                    >
                    About Me
                </NavLink>
                <NavLink
                    to="/portfolio"
                    style={({ isActive }) => ({
                        color: isActive ? '#000000' : '#ffffff',
                        background: isActive ? '#92edf3' : '',
                        borderRadius: '10px',
                    })}
                    className="App-link"
                    >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                        color: isActive ? '#000000' : '#ffffff',
                        background: isActive ? '#92edf3' : '',
                        borderRadius: '10px',
                    })}
                    className="App-link"
                    >
                    Contact
                </NavLink>
                <NavLink
                    to="/Resume"
                    style={({ isActive }) => ({
                        color: isActive ? '#000000' : '#ffffff',
                        background: isActive ? '#92edf3' : '',
                        borderRadius: '10px',
                    })}
                    className="App-link"
                    >
                    Resume
                </NavLink>
                
                </Col>
            </Navbar>
        </div>
    )
}