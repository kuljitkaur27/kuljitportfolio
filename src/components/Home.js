import React, {Component} from 'react';
import { Figure, FigureImage, FigureCaption} from 'react-bootstrap';
import './style.css';
import { SocialIcon } from 'react-social-icons';

class Home extends Component {
render(){
  return(
    <div>

    <div>
    <Figure className="text">
    <h4><strong>Software Engineering Immersive from General Assembly, Sydney</strong></h4>
      <Figure.Caption className="text">
        <h4><strong>● 7.3 years experience in Sopra Steria in </strong><Figure.Image  className="space"
        alt="SAP ABAP"
        src="/../img/sap.jpg"
        /></h4>
        <h4>● Qualifications in Computer Applications</h4>
        <h4>● Technical Skills: <strong><i>HTML, CSS, Javascript, Ruby, Rails, React, Vue, Node.js, C++, OOPs</i></strong></h4>
        <h4>● Passionate Coder, Hardworking, sincere, enjoys my work</h4>
        <h4>● A good Knowledge and experience of SDLC</h4>
        <h4>● I worked in an onshore-offshore model for many years. </h4>
        <h4>● Went to France for completion of the Project</h4>
        <h4>● I like working on new challenges and can’t wait to join a collaborative team as a full-stack developer</h4>
      </Figure.Caption>
    </Figure>

    </div>

    </div>
  );
}
}

export default Home;
