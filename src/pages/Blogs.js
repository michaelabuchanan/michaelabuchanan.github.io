import React from 'react';

// React Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

// icons from react-icons
import { IoIosConstruct } from 'react-icons/io'

// images
import gans from '../pics/fakes010296.png'
import react_logo from "../react_logo.jpg"
import rl from "../pics/rl.jpeg"

// CSS for this page
import './Article.css';

function Blogs() {
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
            <IoIosConstruct />&ensp;Site still under construction, so all links might not work yet! Please check back soon :)
            </Navbar.Collapse>
        </Navbar>

        <Container fluid id="parent1" noGutters>
            <Row style={{height:100}}>
                <Col id="left1" md={8}>
                    <p id="c-head">Most recent posts:</p>
                    <Carousel id="car">
                       <Carousel.Item>
                            <a href='#gym'>
                                <img className="d-block w-100" src={rl} alt="rl blog pic" />
                                <Carousel.Caption>
                                    <h3 class="c-title"><b>Reinforcement Learning wtih OpenAI Gym and Baselines</b></h3>
                                    <p class="c-d">This blog post covers how to easily get started with reinforcement learning.</p>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>

                        <Carousel.Item>
                            <a href='#gans'>
                                <img className="d-block w-100" src={gans} alt="gans blog pic" />
                                <Carousel.Caption>
                                    <h3 class="c-title"><b>Generating New Cars Using GANs</b></h3>
                                    <p class="c-d">This blog post covers the basics of what GANs is and how you can use it to create images of nonexistent cars.</p>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>

                        <Carousel.Item>
                            <a href='#gitpages'>
                                <img className="d-block w-100" src={react_logo} alt="gans blog pic" />
                                <Carousel.Caption>
                                    <h3 class="c-title"><b>How to host your React app on Git-Pages for free</b></h3>
                                    <p class="c-d">This blog post covers how to host a React based page on Git-Pages.</p>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col id="right1" md={4}> 
                    <p id="list-head">Blog Posts</p>
                    <p class="entry"><span class="date">11/24/20:</span> <a href="#gym">Reinforcement Learning with OpenAI Gym and Baselines</a></p>
                    <p class="entry"><span class="date">11/10/20:</span> <a href="#gans">Generating New Cars Using GANs</a></p>
                    <p class="entry"><span class="date">08/25/20:</span> <a href="#gitpages">How to host your React App on GitPages</a></p>
                </Col>
            </Row>
        </Container>



    </div>

  );
}
export default Blogs;
