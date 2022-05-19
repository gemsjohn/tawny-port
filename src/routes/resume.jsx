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
      </div>
      <Footer />
      </>
    );
  }