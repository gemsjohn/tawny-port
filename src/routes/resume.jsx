import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Footer } from '../footer';
import { Header } from '../header';
import resume from '../assets/CV_JM.pdf';
import photo from '../assets/pdf_icon.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import mongoose from '../assets/mongoose.png';
import mysql2 from '../assets/mysql.png';
import seq from '../assets/sequelize.png';
import npm from '../assets/npm.png';
import heroku from '../assets/heroku.png';
import insomnia from '../assets/insomnia.png';
import postman from '../assets/postman.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';

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
    },
    cardImage: {
      borderRadius: 24,
      width: '5rem',
      height: '5rem',
      padding: '10px',
      margin: 'auto',
      opacity: '80%'
    }
  }
    return (
      <div className="backdrop">
      <Header />
      <div className="App">
        <Container className="full-space">
          <div>
            <h3 className="extra-spacing"><img src={photo} className="pdf-icon" alt="" />Download <DownloadLink src={resume}>Resume</DownloadLink></h3>
          </div>
          <Row>
            <Col>
            <Card style={styles.card}>
              <Card.Header as="h5" style={styles.card}>Back-end Proficiences</Card.Header>
              <Card.Body>
                <Row>
                  <Col><Row><img src={node} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Node.js</Row></Col>
                  <Col><Row><img src={mongo} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">MongoDB</Row></Col>
                  <Col><Row><img src={mongoose} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Mongoose</Row></Col>
                  <Col><Row><img src={mysql2} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">MySQL2</Row></Col>
                  <Col><Row><img src={seq} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Sequelize</Row></Col>
                  <Col><Row><img src={npm} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">NPM</Row></Col>
                  <Col><Row><img src={heroku} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Heroku</Row></Col>
                  <Col><Row><img src={insomnia} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Insomnia</Row></Col>
                  <Col><Row><img src={postman} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Postman</Row></Col>
                </Row>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <div className="extra-spacing"></div>
          <Row>
            <Col>
              <Card style={styles.card}>
                <Card.Header as="h5" style={styles.card}>Front-end Proficiences</Card.Header>
                <Card.Body>
                <Row>
                  <Col><Row><img src={react} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">React</Row></Col>
                  <Col><Row><img src={html} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">HTML</Row></Col>
                  <Col><Row><img src={css} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">CSS</Row></Col>
                  <Col><Row><img src={javascript} style={styles.cardImage} className="pdf-icon" alt="" /></Row><Row className="resume-org">Javascript</Row></Col>
                </Row>                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="spacing-gap"></div>
        </Container>
      </div>
      <Footer />
      </div>
    );
  }