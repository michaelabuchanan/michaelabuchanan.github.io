import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap component imports
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IoIosConstruct } from 'react-icons/io'
import { CustomNavbar } from './components/CustomNavbar'


function App() {
  return (
    <div className="App">

      <CustomNavbar />

      <Container fluid id="parent" noGutters> 
        <Row >
          <Col id="left" md="12" lg="12" xl="6">
          <div class="smoke">
            <Row className="align-items-center">

                <div class="box">
                  <p class="head"><b>Programming</b></p>
                  <p class="body"><a href="#blog">Blogs</a>&ensp;&bull;&ensp;Projects&ensp;&bull;&ensp;Resume</p>
                
                </div>

            </Row>
            </div> 
          </Col>
          

          <Col id="right" md="12" lg="12" xl="6">
            <div class="smoke"></div>
            <div class="box">
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
