import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


export default class Navigation extends Component {
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav>
            <NavLink className="d-inline p-2 text-dark" to="/">About Me</NavLink>
            <NavLink className="d-inline p-2 text-dark" to="/projects">Projects</NavLink>
            <NavLink className="d-inline p-2 text-dark" to="/experience">Experience</NavLink>
            <NavLink className="d-inline p-2 text-dark" to="/education">Education</NavLink>
            <NavLink className="d-inline p-2 text-dark" to="/resume">Resume</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
