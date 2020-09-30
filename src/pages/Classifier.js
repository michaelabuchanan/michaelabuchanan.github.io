import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import TextField from '@material-ui/core/TextField';

import starion from "../pics/starion.jpg"

import './Article.css';

function Classifier() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="breadcrumb"><code><NavLink exact activeClassName="active" style={{color: 'cyan'}} to="/">Articles</NavLink> &gt; Classifier</code></p>

        <p>Sports Car Classification with Small Datasets</p>

        <img src={starion} alt="Mitsubishi Starion race car" height="350" width="550"/>

        <p className="contents"><code><span className="blue"><Link to="gans#overview">Overview</Link></span> -&gt; <span className="blue"><Link to="gans#pre">Prerequisites</Link></span> -&gt; <span className="green"><Link to="gans#react">Dataset</Link></span> -&gt; <span className="green"><Link to="gans#repo">Progressive GANs</Link></span> -&gt; <span className="green"><Link to="gans#results">Results</Link></span> -&gt;<span className="blue"><Link to="gans#comments"> Comments</Link></span></code></p>

        <p id="overview" className="subject"><strong>Overview</strong></p>
        <p className="text">While working on my <NavLink exact activeClassName="active" style={{color: 'cyan'}} to="gans">GANs car generation project</NavLink>, I began to realize how important the dataset used was to the final product. While I had access to large quality datasets of car images, they were mostly normal cars instead of the sports cars I needed for this project. Therefore, I decided to create a classifer in order to make it easier to filter sports cars out of existing datasets like the <a href="http://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank"><span className="blue">Stanford Cars dataset</span></a>. Hopefully this will make it possible to create a more specified but still large (>10,000 image) dataset for use in my GANs project.  </p>


        <p id="pre" className="subject"><strong>Prerequisites</strong></p>
        <ul className="text list">
            <li>Familiarity with Deep Learning, specifically RCNN classifiers</li>
            <li>Have Pytorch</li>
            <li>Access to GPUs (for faster training)</li>
          </ul>

        <p id="react" className="subject"><strong>Dataset</strong></p>
        <p className="text">In order to create the dataset I used for training, I used a class-sorted variation of the Stanf</p>
{/*
        <p id="repo" className="subject"><strong>Progressive GANs</strong></p>
        <p className="text">I decided to use a progressive GANs model for this experiment. The model I used was developed by a team at NVIDIA and is linked <a href="https://github.com/tkarras/progressive_growing_of_gans" target="_blank"><span className="blue">here</span></a>. The idea behind this variation of GANs is that the generator and discriminator are both trained starting at a very low resoluiton. The resolution is progressively increased throughout the training process until it eventually reaches the desired resolution (1024x1024 in this case). This makes it easier to achieve training stability, especially in situations like this one where there are a lot of fine details for the model to figure out.</p>

        <p id="results" className="subject"><strong>Results</strong></p>

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
          <th>TBD</th>
          <th>4xNVIDIA V100</th>
        </tr>
        </table>

        <p className="text">Here are the fake images that were produced on the last round of <strong>attempt 1</strong> training this model:</p>
        <img src={result} alt="react logo" height="600" width="900"/>

        <p className="text">While the top middle picture was pretty good, the rest of the photos produced were not satisfactory. I began to wonder if the uncurated scraped dataset I was using was part of the problem. To test this, I decided to run another round of training using the same algorithm, this time using the Stanford car dataset linked in the table above. While this may not produce the "sports" car images I was hoping for, this test will allow me to determine if the image quality in the dataset was holding the model back.<br /></p>

        <p className="text">Here are the fake images that were produced on the last round of <strong>attempt 2</strong> training this model:</p>
        <img src={result2} alt="react logo" height="600" width="900"/>

        <p className="text">Once again, only one of the pictures produced could pass as a car. These results seem to indicate that the dataset quality was not the main problem the model was facing. In this second attempt, I only used the training image dataset provided by Stanford in order to keep the dataset size roughly equivalent to the one used in the first attempt. However, I now wanted to find out if increasing the dataset size would significantly increase the quality of the output produced. Therefore, for my third attempt, I added the testing dataset to the training dataset I already had to produce a new dataset which was about twice the size of those used previously.<br /></p>

        <p className="text">Here are the fake images that were produced on the last round of <strong>attempt 3</strong> training this model:</p>
        <p>Image will be placed here once training finishes!</p>



        <p id="comments" className="subject"><strong>Comments</strong></p>

        <form noValidate autoComplete="off">
      <TextField id="standard-multiline-flexible" className="cbox" multiline rowsMax={10} varient="outlined" label="Type your comment here!"/>
    </form>
    */}
      </header>
    </div>
  );
}
export default Classifier;
