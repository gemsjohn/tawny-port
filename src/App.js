import './App.css';
import { Container, Card, Col, Row } from 'react-bootstrap';
import photo from './assets/headshot.png';
import photov3 from './assets/headshotv3.png';
import { Header } from './header';
import { Footer } from './footer';


function App() {
  return (
    <>
      <div className="backdrop">
        <Header />
        <img src={photov3} className="profile" alt="" /> 
        <Footer />
      </div>
    </>
  );
}

export default App;

