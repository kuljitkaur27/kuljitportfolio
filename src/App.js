import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './App.css';
import Home  from './components/Home';
import Projects  from './components/Projects';
import Experience  from './components/Experience';
import Education  from './components/Education';
import Resume  from './components/Resume';
import {Image} from 'react-bootstrap';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  render(){
    const style = {
      width: '200px',
      height: '200px',
      margin: '0px'
    }
    return (
      <BrowserRouter>
        <div >
          <div className="divColor">
            <Image className="App" style={style} src="/../img/myImage.png" alt="My photo" roundedCircle />
              <h1 className="m-3 d-inline-block justify-content-left">KULJIT KAUR <h1 className="text"> Aspiring Full Stack Developer | Experienced Software Engineer</h1></h1>
              <div className="rightAlign">
                <h3 className="d-inline-block justify-content-Right text"  >Contact</h3>
                <SocialIcon url="https://www.linkedin.com/in/kuljitkaurdeveloper" />
                <SocialIcon url="https://github.com/kuljitkaur27" />
                <SocialIcon url="https://kuljitkauremail@gmail.com" />
              </div>
            </div>
            <Navigation />
            <p> </p>
            <Switch>
              <Route path="/" component={ Home } exact/>
              <Route path="/projects" component={ Projects } />
              <Route path="/experience" component={ Experience } />
              <Route path="/education" component={ Education } />
              <Route path="/resume" component={ Resume } />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
