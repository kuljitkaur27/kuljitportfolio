import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './App.css';
import Home  from './components/Home';
import Projects  from './components/Projects';
import Experience  from './components/Experience';
import {Image, Button} from 'react-bootstrap';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  btnClick() {
        window.open("https://gitconnected.com/kuljitkaur27/resume");
      }
  render(){
    const style = {
      width: '200px',
      height: '200px',
      margin: '0px'
    }
    return (
      <BrowserRouter>
        <div >
          <div className="main-header">
              <div className="main-image">
                <Image className="main-logo" style={style} src="/../img/myImage.png" alt="Kuljit Kaur Photo" />
              </div>
              <div className="header-child">
                <h2 className="m-3 d-inline-block justify-content-left">KULJIT KAUR </h2>
                <h4 className="text"> Aspiring Full Stack Developer | Experienced Software Engineer</h4>
                <Button variant="light" className="small-margin header-child" onClick={this.btnClick.bind(this)}>
                 Download Resume
                </Button>
                <SocialIcon className="small-margin header-child" url="https://www.linkedin.com/in/kuljitkaurdeveloper" />
                <SocialIcon className="small-margin header-child" url="https://github.com/kuljitkaur27" />
                <SocialIcon className="small-margin header-child" url="https://kuljitkauremail@gmail.com"/>
              </div>
            </div>
            <Navigation />
            <p> </p>
            <Switch>
              <Route path="/" component={ Home } exact/>
              <Route path="/projects" component={ Projects } />
              <Route path="/experience" component={ Experience } />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
