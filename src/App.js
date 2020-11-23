import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';

// Bootstrap component imports
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IoIosConstruct } from 'react-icons/io'

function App() {
  ReactGA.initialize('G-Q071HHLEKY');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <Navbar bg="light" expand="sm" id="navbar" noGutters>
        <Navbar.Brand href="/">Michaela Buchanan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <NavDropdown title="Programming" id="basic-nav-dropdown">
              <NavDropdown.Item href="#blog">Blogs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Motorsport" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Garage</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Calendar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <p id="construct"><IoIosConstruct />&ensp;Site still under construction, so all links might not work yet! Please check back soon :)</p>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid id="parent" noGutters>
        <Row style={{height: 100}}>
          <Col id="left" md lg="6">
            <div class="smoke"></div>
            <div class="desc">
              <p class="head"><b>Programming</b></p>
              <p class="body"><a href="#blog">Blogs</a>&ensp;&bull;&ensp;Projects&ensp;&bull;&ensp;Resume</p>
            
            </div>
           
          </Col>
          <Col id="right" md lg="6">
            <div class="smoke"></div>
            <div class="desc">
              <p class="head"><b>Motorsport</b></p>
              <p class="body">Garage&ensp;&bull;&ensp;Projects&ensp;&bull;&ensp;Calendar</p>
            </div>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
