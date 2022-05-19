import { Container } from 'react-bootstrap';
import { Footer } from '../footer';
import { Header } from '../header';
export default function Contact() {
    return (
      <>
      <Header />
      <Container className="full-space">
        <h2>Contact</h2>
      </Container>
      <Footer />
      </>
    );
  }