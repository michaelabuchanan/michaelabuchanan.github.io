import React from 'react';

// React Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

// images
import gans from '../pics/fakes010296.png'
import react_logo from "../react_logo.jpg"
import rl from "../pics/rl.jpeg"

import { CustomNavbar } from '../components/CustomNavbar'

// CSS for this page
import './Article.css';
import './About.css'

function Blogs() {
  return (
    <div className="App">
        <CustomNavbar />

        <Container fluid id="parent1" noGutters>
            <Row style={{height:100}}>
                <Col id="left1" md={9}>
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

                <Col id="right1" md={3}> 
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
