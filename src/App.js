import './App.css';
import { Container, Card, Col, Row } from 'react-bootstrap';
import photo from './assets/headshot.png';
import photov3 from './assets/headshotv3.png';
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
        <Row>
              <Col sm={6}>
                <img src={photov3} className="profile" alt="" />
              </Col>
              <Col sm={6}>
              {/* <div className="extra-spacing"></div>
                <div className="center">
                  <h1 className="profile-text">John Martin</h1>
                  <p> 
                    I'm a hobbiest developer born and raised in North Carolina. I currently work at WCG VeraSci where our company has produced a Browser, Tablet, and Phone
                    based application called Pathway, which is designed to evaluate cognitive disorders. My role at the company is to Manage a Technology Quality Assurance Team 
                    that ensures regulatory compliance. My team falls within the Software Development Life Cycle (SDLC), right behind our internal Development Team.
                  </p>
                  <div className="extra-spacing"></div>
                  <p>
                    On a personal level I enjoy restoring old Rally Cars or anything rare. Love spending time with my Wife, Dogs, and Cat. I'll try anything at least once and therefore
                    enjoy checking out new restaurants.  
                  </p>
                </div> */}
              </Col>
        </Row>  
        {/* <Card className="extra-spacing" style={styles.card}>
          <Card.Body>
          </Card.Body>
        </Card> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

