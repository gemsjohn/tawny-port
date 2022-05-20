import './App.css';
import { Container, Card, Button } from 'react-bootstrap';
import photo from './assets/favicon.png';
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
            <img src={photo} className="profile" alt="" />
            <h5> 
              I'm a hobbiest developer born and raised in North Carolina. I currently work at WCG VeraSci where our company has produced a Browser, Tablet, and Phone
              based application called Pathway, which is designed to evaluate cognitive disorders. My role at the compnay is to Manage a Technology Quality Assurance Team 
              that ensures regulatory compliance. My team falls within the Software Development Life Cycle (SDLC), right behind our internal Development Team.
            </h5>
            <h5>
              On a personal level I enjoy restoring old Rally Cars or anything rare. Love spending time with my Wife, Dogs, and Cat. I'll try anything at least once and therefore
              enjoy checking out new restaurants.  
            </h5>

          </Card.Body>
        </Card>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;

