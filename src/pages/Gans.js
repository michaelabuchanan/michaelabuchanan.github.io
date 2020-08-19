import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import result from "../fakes012000.png"

import './Article.css';

function Gans() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="breadcrumb"><code><NavLink exact activeClassName="active" style={{color: 'cyan'}} to="/">Articles</NavLink> &gt; GANs</code></p>

        <p>Generating New Sports Cars using GANs</p>

        <img src={result} alt="react logo" height="350" width="500"/>

        <p className="contents"><code><span className="blue"><Link to="gans#overview">Overview</Link></span> -&gt; <span className="blue"><Link to="gans#pre">Prerequisites</Link></span> -&gt; <span className="green"><Link to="gans#react">Dataset</Link></span> -&gt; <span className="green"><Link to="gans#repo">Progressive GANs</Link></span> -&gt; <span className="green"><Link to="gans#results">Results</Link></span> -&gt;<span className="blue"><Link to="gans#comments"> Comments</Link></span></code></p>

        <p id="overview" className="subject"><strong>Overview</strong></p>
        <p className="text">This article is less of an instructive guide and more of a record of my attempts at generating sports car images using Generative Adversarial Networks (GANs). So far, while the results have been promising, they have not been of the level of quality that I am hoping to achieve. Some of the largest challenges I'm encountering include the small dataset easily available for "sport" or "performance" oriented car images as well as the inherent difficulty of training GANs. </p>

        <p id="pre" className="subject"><strong>Prerequisites</strong></p>
        <ul className="text list">
            <li>Familiarity with Deep Learning, specifically RCNNs</li>
            <li>Have Tensorflow installed</li>
            <li>Access to GPUs (for faster training)</li>
          </ul>

        <p id="react" className="subject"><strong>Dataset and Image Augmentation</strong></p>
        <p className="text">Most of the dataset used for training thus far have been scraped from the Yandex search engine. To do this, I followed the guide linked <a href="https://gist.github.com/imneonizer/23d2faa12833716e22830f807b082a58" target="_blank"><span className="blue">here</span></a>. Search phrases such as "sports car", "race car", and "drift car" were used to compile these images. Then, various image augmentations were performed to increase the number of images available for training. The guide linked <a href="https://towardsdatascience.com/complete-image-augmentation-in-opencv-31a6b02694f5" target="_blank"><span className="blue">here</span></a> was used as a guide to performing these augmentations using <code>OpenCV</code>. I ended up using </p>

        <p id="repo" className="subject"><strong>Progressive GANs</strong></p>

        <p id="results" className="subject"><strong>Results</strong></p>

        <p id="comments" className="subject"><strong>Comments</strong></p>

      </header>
    </div>
  );
}
export default Gans;
