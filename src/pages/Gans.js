import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import result from "../fakes012000.png"
import result2 from "../attempt_2_final.png"
import result3_1 from "../pics/fakes010296.png"
import result3_2 from "../pics/fakes012000.png"

// React Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// icons from react-icons
import { IoIosConstruct } from 'react-icons/io'

import './Article.css';

function Gans() {
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
          

          <img src={result} alt="react logo" height="350" width="500"/>
          <p id="header">Generating New Sports Cars using GANs</p>
          <p className="contents"><code><span className="blue"><Link to="gans#overview">Overview</Link></span> -&gt; <span className="blue"><Link to="gans#pre">Prerequisites</Link></span> -&gt; <span className="green"><Link to="gans#react">Dataset</Link></span> -&gt; <span className="green"><Link to="gans#repo">Progressive GANs</Link></span> -&gt; <span className="green"><Link to="gans#results">Results</Link></span> -&gt;<span className="blue"><Link to="gans#comments"> Comments</Link></span></code></p>

          <p id="overview" className="subject" ><strong>Overview</strong></p>
          <p className="text">This article is less of an instructive guide and more of a record of my attempts at generating sports car images using Generative Adversarial Networks (GANs). So far, while the results have been promising, they have not been of the level of quality that I am hoping to achieve. Some of the largest challenges I'm encountering include the small dataset easily available for "sport" or "performance" oriented car images as well as the inherent difficulty of training GANs. </p>

          <p id="pre" className="subject" ><strong>Prerequisites</strong></p>
          <ul className="text list">
              <li>Familiarity with Deep Learning, specifically GANs</li>
              <li>Have Tensorflow-GPU 1.15 installed</li>
              <li>Access to GPUs (for faster training)</li>
            </ul>

          <p id="react" className="subject" ><strong>Dataset and Image Augmentation</strong></p>
          <p className="text">Most of the dataset used for the first attempt of training has been scraped from the Yandex search engine. To do this, I followed the guide linked <a href="https://gist.github.com/imneonizer/23d2faa12833716e22830f807b082a58" target="_blank"><span className="blue">here</span></a>. Search phrases such as "sports car", "race car", and "drift car" were used to compile these images. Then, various image augmentations were performed to increase the number of images available for training. The guide linked <a href="https://towardsdatascience.com/complete-image-augmentation-in-opencv-31a6b02694f5" target="_blank"><span className="blue">here</span></a> was used as a guide to performing these augmentations using OpenCV. I ended up using four different augmentations: vertical shift, horizontal shift, brightness changes, and zoom. This allowed me to create a dataset that was four times larger than the number of images I was able to scrape. However, after using this dataset, I am a bit concerned that some of these augmentations have an affect of the proportions of the cars generated by the network trained on these images so I need to further experiment with this strategy.</p>

          <p className="text">The dataset used for the second attempt at training was pulled from the Stanford Cars Dataset (linked <a href="http://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank"><span className="blue">here</span></a>). The purpose of this run of training is to see if much better results can be achieved with a larger, more consistent dataset. While this won't give me the "sports car" results I am looking for, this round of training will help guide my next steps to improving the model I am hoping to create, whether that be improving the dataset used or tweaking the model itself.</p>

          <p id="repo" className="subject" ><strong>Progressive GANs</strong></p>
          <p className="text">I decided to use a progressive GANs model for this experiment. The model I used was developed by a team at NVIDIA and is linked <a href="https://github.com/tkarras/progressive_growing_of_gans" target="_blank"><span className="blue">here</span></a>. The idea behind this variation of GANs is that the generator and discriminator are both trained starting at a very low resoluiton. The resolution is progressively increased throughout the training process until it eventually reaches the desired resolution (1024x1024 in this case). This makes it easier to achieve training stability, especially in situations like this one where there are a lot of fine details for the model to figure out.</p>

          <p id="results" className="subject" ><strong>Results</strong></p>

          <p className="text">The table below outlines some of the results of using this variety of GANs as well as the final product achieved.</p>
          <table className="text tb" width="80%">
          <tr>
            <th>Attempt</th>
            <th>Dataset</th>
            <th>Dataset Size</th>
            <th>Resolution</th>
            <th>Run Time</th>
            <th>GPUs Used</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Custom web scraped</th>
            <th>9524</th>
            <th>1024x1024</th>
            <th>2d 20h 51m</th>
            <th>4xNVIDIA V100</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Stanford dataset (<a href="http://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank"><span className="blue">link</span></a>)</th>
            <th>8144</th>
            <th>1024x1024</th>
            <th>2d 20h 56m</th>
            <th>4xNVIDIA V100</th>
          </tr>
          <tr>
            <th>3</th>
            <th>Stanford dataset (<a href="http://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank"><span className="blue">link</span></a>)</th>
            <th>16,185</th>
            <th>1024x1024</th>
            <th>2d 20h 55m</th>
            <th>4xNVIDIA V100</th>
          </tr>
          <tr>
            <th>4</th>
            <th>Kaggle 60,000 Car dataset (<a href="https://www.kaggle.com/prondeau/the-car-connection-picture-dataset" target="_blank"><span className="blue">link</span></a>)</th>
            <th>64467</th>
            <th>1024x1024</th>
            <th>4d 20h 55m</th>
            <th>4xNVIDIA V100</th>
          </tr>
          </table>

          <p className="text">Here are the fake images that were produced on the last round of <strong>attempt 1</strong> training this model:</p>
          <img src={result} alt="react logo" height="600" width="900"/>

          <p className="text">While the top middle picture was pretty good, the rest of the photos produced were not satisfactory. I began to wonder if the uncurated scraped dataset I was using was part of the problem. To test this, I decided to run another round of training using the same algorithm, this time using the Stanford car dataset linked in the table above. While this may not produce the "sports" car images I was hoping for, this test will allow me to determine if the image quality in the dataset was holding the model back.<br /></p>

          <p className="text">Here are the fake images that were produced on the last round of <strong>attempt 2</strong> training this model:</p>
          <img src={result2} alt="react logo" height="600" width="900"/>

          <p className="text">Once again, only one of the pictures produced could pass as a car. These results seem to indicate that the dataset quality was not the main problem the model was facing. In this second attempt, I only used the training image dataset provided by Stanford in order to keep the dataset size roughly equivalent to the one used in the first attempt. However, I now wanted to find out if increasing the dataset size would significantly increase the quality of the output produced. Therefore, for my third attempt, I added the testing dataset to the training dataset I already had to produce a new dataset which was about twice the size of those used previously.<br /></p>

          <p className="text">Here are the fake images that were produced on round 10296 of <strong>attempt 3</strong> training this model:</p>
          <img src={result3_1} alt="react logo" height="600" width="900"/>

          <p className="text">Here are the fake images that were produced on the last round of <strong>attempt 3</strong> training this model:</p>
          <img src={result3_2} alt="react logo" height="600" width="900"/>

          <p className="text">It seems that using a larger dataset led to an increase in image quality. However, it seems that the images produced by the GANs in the middle of training were better than those produced at the final tick. The next steps for this project will include creating a more sports car exclusive dataset of a similar size to the one used in attempt 3 as well as potentially tweaking the model itself.</p>
          </Container>
    </div>
  );
}
export default Gans;
