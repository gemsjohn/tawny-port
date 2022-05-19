import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import photo from './assets/favicon.png';
import { Header } from './header';


function App() {
  return (
    <>
    <Header />
    <Container>
      <h2>About Me</h2>
      <div>
        <Row>
          <Col>
            <img src={photo} alt="photo" />
          </Col>
          <Col>
            <p>Short bio about me.</p>
          </Col>
        </Row>
      </div>
    </Container>
    </>
  );
}

export default App;

