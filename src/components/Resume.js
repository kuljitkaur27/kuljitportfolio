import React, {Component} from 'react';
import {Button, Carousel, Spinner} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Resume extends Component {

render(){
  return(
    <div>
      <Button variant="dark" disabled>
        <SocialIcon url="https://gitconnected.com/kuljitkaur27/resume" /> Download Resume...
      </Button>
    </div>
  );
}
}
export default Resume;
