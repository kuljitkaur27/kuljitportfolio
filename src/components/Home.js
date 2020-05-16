import React, {Component} from 'react';
import { Figure, FigureImage, FigureCaption} from 'react-bootstrap';
import './style.css';
import { SocialIcon } from 'react-social-icons';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardBody
} from 'react-bootstrap';

class Home extends Component {
render(){
  return(
    <div className="mainContainer">
      <CardDeck>
        <Card className="basicCard homeCard">
          <Card.Body className="card-content">
            <Card.Title className="title">Introduction</Card.Title>
            <Card.Text>
              <div>
              <ul>
                <li>Software Engineering Immersive from General Assembly, Sydney.</li>
                <li>7.3 years experience in Sopra Steria in SAP ABAP.</li>
                <li>Qualifications in Computer Applications.</li>
                <li>Technical Skills: HTML, CSS, Javascript, Ruby, Rails, React, Vue, Node.js, C++, OOPs.</li>
                <li>Passionate Coder, Hardworking, sincere, enjoys my work.</li>
                <li>A good Knowledge and experience of SDLC.</li>
                <li>I worked in an onshore-offshore model for many years.</li>
                <li>Went to France for completion of the Project.</li>
                <li>I like working on new challenges and can’t wait to join a collaborative team as a full-stack developer.</li>
              </ul>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="basicCard">
          <Card.Body className="card-content">
            <Card.Title className="title">My Education</Card.Title>
            <Card.Text>
              <ul>
              <li>Software Engineering Immersive Course at General Assembly(Feb-May 2020)</li>
              <li>Professional Training Course with Planit Software Testing ISTQB Foundation Certificate Course 2011 on (Apr-May 2019).</li>
              <li>Online course in Business Analysis for 6 weeks(Apr-Jun 2018) from Netgraph Technologies.</li>
              <li>Developing Web Apps with SAPUI5(May-Jun 2016) from OpenSAP </li>
              <li>SAP ABAP training(Apr 2008)by company itself. </li>
              <li>Master in Computer Application(MCA): (​July 05 – June 08), New Delhi : Passed with distinction.</li>
              <li>Bachelor in Computer Application(BCA): (​July 02 – June 05), New Delhi : Passed with distinction.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
}

export default Home;
