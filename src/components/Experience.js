import React, {Component} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'react-bootstrap';

class Experience extends Component {

render(){
  return(
    <div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="../img/Sopra.jpg" />
          <Card.Body>
            <Card.Title>Sopra Steria</Card.Title>
            <Card.Text>
              Sopra Steria is a European leader in consulting, digital services and software development.I worked in Sopra for more than 7 years in SAP ABAP. I worked on multiple projects for different clients on different SAP modules like Material Management, Sales & Distribution, Finance, Project systems.
              <hr marginLeft={50} />
              <h5> My Growth in Sopra : </h5>
              <h5>Trainee -> Software Engineer -> Senior Software Engineer -> Lead Engineer </h5>
              <hr marginLeft={50} />
              <h5> Roles and Responsibilities: </h5>
              ● Understanding business requirements, <br/> ● Reviewing alternatives and design solutions,<br/>● Estimation,<br/>● Prepare technical Specifications,<br/>● Coordination & delivery of developments within predefined targets during project implementation,<br/>● documentation,<br/>● development,<br/>● communication with clients.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img className="imageStyle" variant="top" src="../img/ga.jpeg" />
          <Card.Body>
            <Card.Title>General Assembly</Card.Title>
            <Card.Text>
            Software Engineering immersive at General Assembly Sydney (Feb 2020 - May 2020)<br/>
              ● 12 week full time​ (9:00AM to 5:00PM : 5
              days a week) course for ​full stack development​<br/>
              ● Developed projects on HTML, CSS, Javascript, Ruby, Rails, React, Vue, Node.js.<br/>
              ● Wireframe diagrams, Design, code and development (frontend and backend) mockup.<br/>
              ● A well structured and organised Course to build Knowledge and experience in these above technologies.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
}
export default Experience;
