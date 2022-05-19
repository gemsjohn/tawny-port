import React from 'react';
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
    return (
      <>
      <Header />
      <div className="App">
        <h2>Resume</h2>
        <DownloadLink src={resume}>Resume</DownloadLink>
        <h3>Front-end Proficiences</h3>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>Netlify</li>
          <li>Photoshop</li>
        </ul>
        <h3>Back-end Proficiences</h3>
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
      </div>
      <Footer />
      </>
    );
  }