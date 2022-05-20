import { Container, Col, Row, Card, Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import { Header } from '../header';
import bm_dept from '../assets/cli.png';
import sn_disco from '../assets/disco.png'; 
import ecom_shop from '../assets/shop-lyft.png';
import splotch from '../assets/splotch.png';
import wol from '../assets/wol.png';
import employee from '../assets/employee.png';
import { Footer } from '../footer';

const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 25,
    padding: '1rem'
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 8,
    width: '300px',
    height: '300px',
    padding: '10px',
    margin: 'auto'
  }
}
export default function Portfolio() {
  const [open_0, setOpen_0] = useState(false);
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const [open_3, setOpen_3] = useState(false);
  const [open_4, setOpen_4] = useState(false);
  const [open_5, setOpen_5] = useState(false);
    return (
      <div className="backdrop">
      <Header />
      <Container>
        <div className="App">
          <h3 className="extra-spacing">Portfolio</h3>
          {/* ROW #1 */}
          <Row className="Row-space">
            <Col>
              <Card style={{ width: '24rem' }} class="card h-100" style={styles.card}>
                <Card.Img variant="top" src={bm_dept} className="photo" style={styles.cardImage} />
                <Card.Body>
                    <Card.Title>Business Manager</Card.Title>
                    <Button
                      onClick={() => setOpen_0(!open_0)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open_0}
                    >
                      Description
                    </Button>
                    <Row className="Row-space">
                      <Collapse in={open_0}>
                        <div id="example-collapse-text">
                            As a business owner I wanted to be able to view and manage the departments, 
                            roles, and employees in my company so that I could organize and plan my business. 
                            The tool that I have produced is a command line interface that serves as a 
                            content management system.
                        </div>
                      </Collapse>
                    </Row>
                    <Button variant="primary" href="https://github.com/gemsjohn/business-manager">Business Manager</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }} class="card h-100" style={styles.card}>
                <Card.Img variant="top" src={sn_disco} style={styles.cardImage} />
                <Card.Body>
                  <Card.Title>Social Network API</Card.Title>
                  <Button
                      onClick={() => setOpen_1(!open_1)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open_1}
                  >
                    Description
                  </Button>
                  <Row className="Row-space">
                      <Collapse in={open_1}>
                        <div id="example-collapse-text">
                        As an aspiring entrepreneur, I want to build a social media startup company. 
                        In order to accomplish this I need an API for my social network that uses a 
                        NoSQL database so that my website can handle large amounts of unstructured data. 
                        MongoDB appears to be a popular choice for many social networks so I will give 
                        it a try! Ultimately, I want to build a web application that allows users to share 
                        their thoughts, react to friends' thoughts, and create a friend list.                        </div>
                      </Collapse>
                  </Row>
                  <Button variant="primary" href="https://github.com/gemsjohn/social-disco">Social Disco</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }} class="card h-100" style={styles.card}>
                <Card.Img variant="top" src={ecom_shop} style={styles.cardImage} />
                <Card.Body>
                  <Card.Title>E-Commerce Back End</Card.Title>
                  <Button
                      onClick={() => setOpen_2(!open_2)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open_2}
                    >
                      Description
                    </Button>
                    <Row className="Row-space">
                      <Collapse in={open_2}>
                        <div id="example-collapse-text">
                        As a manager at an internet retail company, I wanted to produce a back end 
                        for our e-commer website 'Shop Lyft'. This will allow our company to remain 
                        competitive against other e-commerce stores by keeping all of our products 
                        organized and on record.
                        </div>
                      </Collapse>
                    </Row>
                  <Button variant="primary" href="https://github.com/gemsjohn/shop-lyft">Shop Lyft</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* ROW #2 */}
          <Row className="Row-space">
            <Col>
              <Card style={{ width: '24rem' }} class="card h-100" style={styles.card}>
                <Card.Img variant="top" src={splotch} style={styles.cardImage} />
                <Card.Body>
                  <Card.Title>Non-fungible Token Project</Card.Title>
                  <Button
                      onClick={() => setOpen_3(!open_3)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open_3}
                    >
                      Description
                    </Button>
                    <Row className="Row-space">
                      <Collapse in={open_3}>
                        <div id="example-collapse-text">
                        Splotch is an adventure into the unknown, an opportunity to experiment 
                        with Stacks smart contracts and also share artistic expression.
                        </div>
                      </Collapse>
                    </Row>
                  <Button href="https://www.splotchnft.com/">Splotch NFT</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }} class="card h-100" style={styles.card}>
                <Card.Img variant="top" src={wol} style={styles.cardImage} />
                <Card.Body>
                  <Card.Title>Walks of Love</Card.Title>
                  <Button
                      onClick={() => setOpen_4(!open_4)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open_4}
                    >
                      Description
                    </Button>
                    <Row className="Row-space">
                      <Collapse in={open_4}>
                        <div id="example-collapse-text">
                        The Walks of Love is a full-stack website that matches pet owners with 
                        freelance pet care specialists looking for new friends to care about. 
                        It allows pet owners to post opportunities to care for their pets when 
                        they are unable to and allows potential pet caregivers to accept those opportunities.
                        </div>
                      </Collapse>
                    </Row>
                  <Button href="https://github.com/gemsjohn/walks-of-love-frontend">Walks of Love</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '24rem' }} class="card h-100" style={styles.card} >
                <Card.Img variant="top" src={employee} style={styles.cardImage} />
                <Card.Body>
                  <Card.Title>Employee Profile</Card.Title>
                  <Button
                      onClick={() => setOpen_5(!open_5)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open_5}
                    >
                      Description
                    </Button>
                    <Row className="Row-space">
                      <Collapse in={open_5}>
                        <div id="example-collapse-text">
                        As a manager I wanted to generate a webpage that displays my team's basic info 
                        so that I have quick access to their Emails and Github Profiles. The web application 
                        uses inquirer.js to query the Manager which allows them to build out their team. 
                        Once the query is complete an index.html file is produced allowing the user to open 
                        this file in live server for viewing.
                        </div>
                      </Collapse>
                    </Row>
                  <Button href="https://github.com/gemsjohn/employee-profile">Team Profile Generator</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="supplemental-space"></div>
      <Footer />
      </div>
    );
  }