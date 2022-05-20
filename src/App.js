import './App.css';
import { Container, Card, Col, Row } from 'react-bootstrap';
import photo from './assets/headshot.png';
import { Header } from './header';
import { Footer } from './footer';


function App() {
  const styles = {
    card: {
      backgroundColor: '#b7e0f2a9',
      borderRadius: 25,
      padding: '1rem'
    }
  }
  return (
    <>
      <div className="backdrop">
        <Header />
        <Container>
        <Card className="extra-spacing" style={styles.card}>
          <Card.Header as="h5" style={styles.card}>About Me</Card.Header>
          <Card.Body>
            
            <Row>
              <Col sm={3}>
                <img src={photo} className="profile" alt="" />
              </Col>
              <Col sm={9}>
              <div className="extra-spacing"></div>
                <a> 
                  I'm a hobbiest developer born and raised in North Carolina. I currently work at WCG VeraSci where our company has produced a Browser, Tablet, and Phone
                  based application called Pathway, which is designed to evaluate cognitive disorders. My role at the compnay is to Manage a Technology Quality Assurance Team 
                  that ensures regulatory compliance. My team falls within the Software Development Life Cycle (SDLC), right behind our internal Development Team.
                </a>
                <div className="extra-spacing"></div>
                <a>
                  On a personal level I enjoy restoring old Rally Cars or anything rare. Love spending time with my Wife, Dogs, and Cat. I'll try anything at least once and therefore
                  enjoy checking out new restaurants.  
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;

