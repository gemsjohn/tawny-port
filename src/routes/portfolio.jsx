import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Header } from '../header';
import placeholder from '../assets/placeholder.jpg';
export default function Portfolio() {
    return (
      <>
      <Header />
      <Container>
        <div className="App">
          <h2>Portfolio</h2>
          {/* ROW #1 */}
          <Row className="Row-space">
            <Col>
              <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* ROW #2 */}
          <Row className="Row-space">
            <Col>
              <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      </>
    );
  }