import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import photo from './assets/favicon.png';
import { Header } from './header';
import { Footer } from './footer';


function App() {
  return (
    <>
      
      <div>
        <Header />
        <Container className="full-space">
          <h3 className="extra-spacing">About Me</h3>
          <div>
            <img src={photo} className="profile" alt="photo" />
            <h5> 
              I'm a hobiest developer born and raised in North Carolina. I currently work at WCG VeraSci where our company has produced a Browser, Tablet, and Phone
              based application called Pathway, which is designed to evaluate cognitive disorders. My role at the compnay is to Manage a Technology Quality Assurance Team 
              that ensures regulatory compliance. My team falls within the Software Development Life Cycle (SDLC), right behind our internal Development Team.
            </h5>
            <h5>
              On a personal level I enjoy restoring old Rally Cars or anything rare. Love spending time with my Wife, Dogs, and Cat. I'll try anything at least once and therefore
              enjoy checking out new restaurants.  
            </h5>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;

