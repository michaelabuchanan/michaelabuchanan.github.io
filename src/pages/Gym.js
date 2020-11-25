import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import rl from "../pics/rl.jpeg"

// React Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

// icons from react-icons
import { IoIosConstruct } from 'react-icons/io'

import './Article.css';

function Gym() {
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

       
        <Container fluid>
          

          <img src={rl} alt="react logo" height="350" width="500"/>
          <p id="header">Reinforcement Learning with OpenAI Gym and Baselines</p>
          <p className="contents"><code><span className="blue"><Link to="gym#overview">Overview</Link></span> -&gt; <span className="blue"><Link to="gym#pre">Prerequisites</Link></span> -&gt; <span className="green"><Link to="gym#react">RL Intro</Link></span> -&gt; <span className="green"><Link to="gym#repo">Gym and Baselines</Link></span> -&gt; <span className="green"><Link to="gym#results">Install</Link></span></code></p>

          <p id="overview" className="subject" ><strong>Overview</strong></p>
          <p className="text">Are you interested in trying out reinforcement learning but don’t know where to begin? The OpenAI Gym and Baselines tools are a great resource for beginners looking to jumpstart their reinforcement learning journey. In this blog post I’ll be covering a brief introduction to reinforcement learning, what OpenAI Gym and Baselines are, and how to use them in your next project.  </p>

          <p id="pre" className="subject" ><strong>Prerequisites</strong></p>
          <ul className="text list">
              <li>Access to GPUs for training</li>
              <li>Experience with Conda</li>
            </ul>

          <p id="react" className="subject" ><strong>What is Reinforcement Learning?</strong></p>
          <p className="text">Before we jump into using reinforcement learning (RL), we should clarify the kinds of problems RL can address. In a lot of machine and deep learning problems one uses a dataset to train a model to accomplish the given task. If this dataset includes the “correct answers” to the training set, we are employing supervised learning. For example, if we train an algorithm to classify images of dogs and cats, we can train with an already labeled dataset which can help guide the algorithm’s learning. However, if you are trying to train an algorithm to perform a certain task, like play a game or drive a car, there are no “right” answers for each action the algorithm must take. Reinforcement learning is a great tool for addressing these kinds of problems as it teaches an algorithm by rewarding good outcomes and punishing negative ones until the algorithm learns how to accomplish a task. While there are many nuances and different flavours of RL available today I will save that discussion for a future blog post as this is meant as a quick description of how to get up and running with this technology.</p>


          <p id="repo" className="subject" ><strong>OpenAI Gym and Baselines</strong></p>
          <p className="text">OpenAI Gym advertises itself as “a toolkit for developing and comparing reinforcement learning algorithms” which makes it a great starting point for playing with RL. If you visit their Environments page (https://gym.openai.com/envs/#classic_control) you can check out all of their supported environments to test your RL algorithm on. These vary from text-based Blackjack to trying to manipulate a pen with a robotic hand. </p>
          <p className="text">Once you find an environment you would like to try to solve, the next step is to train a model. To make this task more approachable for a beginner, OpenAI has created Baselines (https://github.com/openai/baselines) to go along with their Gym environments. Baselines contains implementations of many popular RL algorithms and creates a simple pipeline for training on their Gym environments. You can visit their GitHub page to explore the algorithms available though Baselines.</p>

          <p id="results" className="subject" ><strong>Install and Usage</strong></p>

          <p className="text">To install OpenAI Gym and Baselines, see their respective websites for installation instructions or check out my webpage for a set-by-step tutorial (link). All you have to do is install the Python libraries for these two tools on your GPU machine and you are ready to go. I chose to train using the DDPG (deep deterministic policy gradient) algorithm on the BipedalWalkerHardcore-v3 environment. </p>

          
          </Container>
    </div>
  );
}
export default Gym;
