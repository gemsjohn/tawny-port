import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Footer } from '../footer';
import { Header } from '../header';
import resume from '../assets/CV_JM.pdf';

class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}

export default function Resume() {
  const styles = {
    card: {
      backgroundColor: '#b7e0f2a9',
      borderRadius: 25,
      padding: '1rem'
    }
  }
    return (
      <div className="backdrop">
      <Header />
      <div className="App">
        <Container className="full-space">
          <div>
            <h3 className="extra-spacing">Download <DownloadLink src={resume}>resume</DownloadLink></h3>
          </div>
          <Row>
            <Col>
            <Card style={styles.card}>
              <Card.Header as="h5" style={styles.card}>Back-end Proficiences</Card.Header>
              <Card.Body>
                <ul>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose ODM</li>
                  <li>MySQL2</li>
                  <li>Sequelize</li>
                  <li>NPM Packages</li>
                  <ul>
                    <li>Express.js</li>
                    <li>Inquirer</li>
                    <li>Console.table</li>
                  </ul>
                  <li>Heroku / Heroku CLI</li>
                  <li>Insomnia</li>
                </ul>
              </Card.Body>
            </Card>
            </Col>
            <Col>
              <Card style={styles.card}>
                <Card.Header as="h5" style={styles.card}>Front-end Proficiences</Card.Header>
                <Card.Body>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>Netlify</li>
                    <li>Photoshop</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      </div>
    );
  }