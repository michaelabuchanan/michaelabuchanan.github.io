import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import rl from "../pics/rl.jpeg"
import rl_vid from "../pics/rl_video.mp4"

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

          <p className="text">To install OpenAI Gym and Baselines, first install Conda on your GPU machine (link to Conda install page). 
Then, visit this link (https://drive.google.com/file/d/1Sd5GoTMZ9TypCBmU2SvaT39O66DMXr2_/view?usp=sharing ) to download the YAML file I created. This YAML file will allow you to easily install all of the packages you need to run OpenAI Gym and Baselines using your Conda environment. Once you downloaded the file, run the following two commands to install these packages into your environment. Make sure you are in the same directory as the YAML file you just downloaded.
 </p>

          <p className="text">conda env update --file gym_env.yml</p>
          <p className="text">conda activate gym</p>

          <p className="text">Now that we’ve downloaded all the Python libraries we need, it’s time to install Baselines. First, install Git if you don’t have it already (link to Git install page). Visit this link to the Baselines GitHub repo and clone the repo onto your machine. Then, move into your new Baselines directory and run the command below to install Baselines using pip.</p>

          <p className="text">pip install -e .</p>

          <p className="text">At this point you should have all the tools you need to start training your model. Feel free to contact me if you run into issues following these instructions or during training.</p>

          <p id="results" className="subject" ><strong>Training and Testing your Model</strong></p>

          <p className="text">I chose to train using the DDPG (deep deterministic policy gradient) algorithm on the BipedalWalkerHardcore-v3 environment. However, you should feel free to try out one of the other algorithms listed on the Baselines README. Just be aware that some algorithms do not work on certain environments, so if you get errors when trying to train, try another algorithm. You can also try another environment available from Gym, although you may need to install some additional packages into your Conda environment to do so.</p>

          <p className="text">I used the command below to initiate my model training. Make sure to change the save_path variable to where you would like the trained model to be saved. The nohup command and the & at the end allow you to run in the background and exit your terminal without interrupting training. This is useful because this command can run anywhere from several hours to several days depending on the algorithm you use, the number of timesteps specified, and your hardware. </p>

          <p className="text">nohup python -m baselines.run --alg=ddpg --env=BipedalWalkerHardcore-v3 --network=mlp --num_timesteps=2e7 --save_path=/trained/model/location/goes/here &</p>

          <p className="text">Once training is done, it’s easy to visually check the model’s performance using the run script included in Baselines. Below is the command I used to see some runs using the trained model and capture the output as .mp4 video files. Note that you will have to change your load_path variable to match the save_path from the previous command.</p>

          <p className="text">python -m baselines.run --env=BipedalWalkerHardcore-v3 --num_timesteps=0 --load_path=/trained/model/location/goes/here --play --save_video_interval=1000 --save_video_length=1000</p>

          <p className="text">Clips from your run will be saved to your /tmp directory. Here’s a clip of one of the videos I recorded from running these commands. As you can see, the model is not perfect by any means but it did learn to walk fairly well and has started figuring out how to traverse obstacles. Now, the next step would be to either try out different models and training parameters available in Baselines or try training using your own algorithm. Now that you have a basic starting point for reinforcement learning, stay tuned for a deeper dive into reinforcement learning algorithms and how to further improve your agent’s performance. </p>

          <video autoplay="true" loop="true"><source src={rl_vid} type="video/mp4" /></video>

          </Container>
    </div>
  );
}
export default Gym;
