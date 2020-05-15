import React, {Component} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container, Row, Col
} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Projects extends Component {
state = {
  project: ''
}
render(){
  return(
    <div>
    <Container>
      <Row >
        <Col xs={4} md={4}>
          <Card>
            <Card.Img className="imageStyle" variant="top" src="../img/yoga.png" />
            <Card.Body>
              <Card.Title>Yoga Website</Card.Title>
              <Card.Text>
                Full stack - Design, Develop and Deploy----- Technologies : React.js with React Bootstrap ,Node.js - Express, MongoDB, body-parser, Mongoose, axios----- Repositories: GitHub ----- Deployment: Heroku, Netlify ----- Team Size : 1 ----- Duration: 1 week ----- This website is built on React with Node . It provides all relevant information to yoga clients and allows the owner to manage the website by adding, updating, deleting - instructors, classes, packages, yoga types and members.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary">Details
            </Button>
            <SocialIcon url="https://github.com/kuljitkaur27/yoga_frontend.git" />
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={4} md={4}>
        <Card>
          <Card.Img className="imageStyle" variant="top" src="../img/seller.png" />
          <Card.Body>
            <Card.Title>Sydney Property Seller</Card.Title>
            <Card.Text>
              Design, Develop and Deploy ----- Technologies : Ruby, Rails, Bootstrap ----- Repositories: GitHub ----- Deployment: Heroku ----- Team Size : 1 ----- Duration: 1 week ----- This is a website that allows sellers to directly advertise their properties to prospective buyers. It shows property images, details and contacts for other information required to sell the property. Sellers can add, remove multiple properties. It has a very flexible search that allows users to search properties based on various criteria. I build this website from scratch, including wire framing, design, develop, integration, deploy and testing.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Details</Button>
          <SocialIcon url="https://github.com/kuljitkaur27/Project2_Seller_Propertywebsite" />
          </Card.Footer>
        </Card>
        </Col>
        </Row>
        <Row>
        <Col >
        <Card>
          <Card.Img className="imageStyle" variant="top" src="/../img/order.png" />
          <Card.Body>
            <Card.Title>Aussie Market order place system</Card.Title>
            <Card.Text>
              Full stack - Design, Develop and Deploy ----- Technologies : React.js, Rails, Bootstrap ----- Repositories: GitHub ----- Deployment: Heroku, Netlify ----- Team Size : 2 (Group Project)----- Duration: 1 week ----- This website allows the manager to manage orders for its branches. It basically implements a CRUD system for products across branches. This was the group project, built using "React" as frontend with "Rails" on the backend. I designed its workflow, backend tables (with model and associations), front end screens on React.js and integration of API with backend using Ajax calls.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Details</Button>
          <SocialIcon url="https://github.com/kuljitkaur27/aussie_market_frontend" />
          </Card.Footer>
        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img className="imageStyle" variant="top" src="/../img/ttt.png" />
          <Card.Body>
            <Card.Title>Tic Tac Toe Game</Card.Title>
            <Card.Text>
              Design, Develop and Deploy----- Technologies : HTML, CSS, JS ----- Repositories: GitHub ----- Team Size : 1 ----- Duration: 1 week ----- This game is played on a grid that's 3 squares by 3 squares. Beauty about this webpage is when you click on the heading "Tic Tac Toe" it gets enlarged.There are 2 Players - each given a chance to select Mark ( "O" or "X" ). In this 2 Players cannot take the same mark . This means If player 1 takes "O" then Player 2 can take "X" only. If two players take the same mark(sign), then the webpage will show a message "2 Players cannot have the same sign ....." and will not allow players to play until they change their mark. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. Then no more clicks on button work when one wins the game. Whichever button is clicked , it becomes disabled. When all 9 squares are full and no one wins the game then the game is draw.This is shown by the message "Game Draw....." Play Again Button : This button allows you to reset the game and start from starting. The players can play any number of times this game. All buttons become enabled again.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Details</Button>
          <SocialIcon url="https://kuljitkaur27.github.io/Project1tictactoe" />
          </Card.Footer>
        </Card>
      </Col>
      </Row>
    </Container>
    </div>
  );
}
}
export default Projects;
