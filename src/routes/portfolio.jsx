import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Header } from '../header';
import bm_dept from '../assets/cli.png';
import sn_disco from '../assets/disco.png'; 
import ecom_shop from '../assets/shop-lyft.png';
import placeholder from '../assets/placeholder.jpg';
import { Footer } from '../footer';
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
                <Card.Img variant="top" src={bm_dept} className="photo" />
                <Card.Body>
                  <Card.Title>Business Manager</Card.Title>
                  <Card.Text>
                    As a business owner I wanted to be able to view and manage the departments, 
                    roles, and employees in my company so that I could organize and plan my business. 
                    The tool that I have produced is a command line interface that serves as a 
                    content management system.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/gemsjohn/business-manager">Business Manager</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={sn_disco} />
                <Card.Body>
                  <Card.Title>Social Network API</Card.Title>
                  <Card.Text>
                  As an aspiring entrepreneur, I want to build a social media startup company. 
                  In order to accomplish this I need an API for my social network that uses a 
                  NoSQL database so that my website can handle large amounts of unstructured data. 
                  MongoDB appears to be a popular choice for many social networks so I will give 
                  it a try! Ultimately, I want to build a web application that allows users to share 
                  their thoughts, react to friends' thoughts, and create a friend list.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/gemsjohn/social-disco">Social Disco</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={ecom_shop} />
                <Card.Body>
                  <Card.Title>E-Commerce Back End</Card.Title>
                  <Card.Text>
                    As a manager at an internet retail company, I wanted to produce a back end 
                    for our e-commer website 'Shop Lyft'. This will allow our company to remain 
                    competitive against other e-commerce stores by keeping all of our products 
                    organized and on record.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/gemsjohn/shop-lyft">Shop Lyft</Button>
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
      <Footer />
      </>
    );
  }