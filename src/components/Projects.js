import React, {Component} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardBody
} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Projects extends Component {
state = {
  project: ''
}
btnClick1() {
      window.open("https://yoga-react-frontend.netlify.app");
    }
btnClick2() {
      window.open("https://deploysellerpropertywebsite.herokuapp.com/");
    }
btnClick3() {
      window.open("https://project2-react-frontend.netlify.com/#/main");
    }
btnClick4() {
      window.open("https://kuljitkaur27.github.io/Project1tictactoe/");
    }
render(){
  return(
    <div className="mainContainer">
      <Card className="basicCard">
        <div className="flex-container">
          <div className="imageContainer">
            <Card.Img variant="top" src="../img/yoga.png" />
          </div>
          <Card.Body className="card-content">
            <Card.Title>Yoga Website</Card.Title>
            <Card.Text>
              <ul>
                 <li>Technologies : React.js with React Bootstrap ,Node.js - Express, MongoDB, body-parser, Mongoose, axios.</li>
                 <li>Deployment: Heroku, Netlify</li>
                 <li>Team Size : 1 </li>
                 <li>Duration: 1 week</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button variant="primary" onClick={this.btnClick1.bind(this)}>Click to See!</Button>
            <span className="icon-spacer"></span>
            <SocialIcon className="icon-git" url="https://github.com/kuljitkaur27/yoga_frontend.git" />
          </Card.Footer>
        </div>
      </Card>
      <Card className="basicCard">
        <div className="flex-container">
          <div className="imageContainer">
            <Card.Img variant="top" src="../img/seller.png" />
          </div>
          <Card.Body className="card-content">
            <Card.Title>Sydney Property Seller</Card.Title>
            <Card.Text>
              <ul>
                 <li>Technologies : Ruby, Rails, Bootstrap.</li>
                 <li>Deployment: Heroku</li>
                 <li>Team Size : 1 </li>
                 <li>Duration: 1 week</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button variant="primary" onClick={this.btnClick2.bind(this)}>Click to See!</Button>
            <span className="icon-spacer"></span>
            <SocialIcon url="https://github.com/kuljitkaur27/Project2_Seller_Propertywebsite" />
          </Card.Footer>
        </div>
      </Card>
      <Card className="basicCard">
        <div className="flex-container">
          <div className="imageContainer">
            <Card.Img variant="top" src="/../img/order.png" />
          </div>
          <Card.Body className="card-content">
            <Card.Title>Aussie Market order place system</Card.Title>
            <Card.Text>
            <ul>
               <li>Technologies : React.js, Rails, Bootstrap.</li>
               <li>Deployment: Heroku, Netlify</li>
               <li>Team Size : 2 </li>
               <li>Duration: 1 week</li>
            </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button variant="primary" onClick={this.btnClick3.bind(this)}>Click to See!</Button>
            <span className="icon-spacer"></span>
            <SocialIcon url="https://github.com/kuljitkaur27/aussie_market_frontend" />
          </Card.Footer>
        </div>
      </Card>

      <Card className="basicCard">
        <div className="flex-container">
          <div className="imageContainer">
            <Card.Img variant="top" src="/../img/tic.png" />
          </div>
          <Card.Body className="card-content">
            <Card.Title>Tic Tac Toe Game</Card.Title>
            <Card.Text>
            <ul>
               <li>Technologies : HTML, CSS, JS.</li>
               <li>Deployment: GitHub</li>
               <li>Team Size : 1 </li>
               <li>Duration: 1 week</li>
            </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button variant="primary" onClick={this.btnClick4.bind(this)}>Click to See!</Button>
            <span className="icon-spacer"></span>
            <SocialIcon url="https://github.com/kuljitkaur27/Project1tictactoe" />
            </Card.Footer>
        </div>
      </Card>
    </div>
  );
}
}
export default Projects;
