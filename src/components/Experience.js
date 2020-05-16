import React, {Component} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'react-bootstrap';

class Experience extends Component {

render(){
  return(
    <div className="mainContainer">
      <CardDeck>
        <Card className="basicCard expClass">
          <div className="flex-container">
            <div className="imageCt-experience">
              <Card.Img className='image-experience' variant="top" src="../img/Sopra.jpg" />
            </div>
            <Card.Body className="card-content">
              <Card.Title>Sopra Steria</Card.Title>
              <Card.Text>
                Sopra Steria is a European leader in consulting, digital services and software development.I worked in Sopra for more than 7 years in SAP ABAP. I worked on multiple projects for different clients on different SAP modules like Material Management, Sales & Distribution, Finance, Project systems.
                <hr marginLeft={50} />
                My Growth in Sopra :
                Trainee -> Software Engineer -> Senior Software Engineer -> Lead Engineer
                <hr marginLeft={50} />
                Roles and Responsibilities:
                <ul>
                <li>Understanding business requirements.</li>
                <li>Reviewing alternatives and design solutions.</li>
                <li> Estimation.</li>
                <li> Prepare technical Specifications.</li>
                <li> Coordination & delivery of developments within predefined targets during project implementation.</li>
                <li> Documentation.</li>
                <li> Development.</li>
                <li> communication with clients.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card className="basicCard expClass">
            <div className="flex-container">
              <div className="imageCt-experience">
                <Card.Img className='image-experience' variant="top" src="../img/ga.png" />
              </div>
              <Card.Body className="card-content">
                <Card.Title>General Assembly</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Software Engineering immersive at General Assembly Sydney (Feb 2020 - May 2020).</li>
                    <li>12 week full time​ (9:00AM to 5:00PM : 5 days a week) course for ​full stack development​</li>
                    <li>Developed projects on HTML, CSS, Javascript, Ruby, Rails, React, Vue, Node.js.</li>
                    <li>Wireframe diagrams, Design, code and development (frontend and backend) mockup.</li>
                    <li>A well structured and organised Course to build Knowledge and experience in these above technologies.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
          </div>
        </Card>
      </CardDeck>
    </div>
  );
}
}
export default Experience;
