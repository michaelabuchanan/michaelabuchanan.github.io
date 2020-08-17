import React from 'react';
import { NavLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

import react_logo from "../react_logo.jpg"

import './Article.css';

function Gitpages() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="breadcrumb"><code><NavLink exact activeClassName="active" style={{color: 'cyan'}} to="/">Articles</NavLink> &gt; Git-Pages</code></p>

        <p><strong>How to host your React app on Git-Pages for free </strong></p>
        <img src={react_logo} alt="react logo" height="350" width="500"/>
        <p className="contents"><code><span className="red"><a href="#overview">Overview</a></span> -&gt; <span className="yellow">Prerequisites</span> -&gt; <span className="green">Setup React Project</span> -&gt; <span className="green">Setup GitHub Repo</span> -&gt; <span className="red">Comments</span></code></p>

        <p id="overview" className="subject">Overview</p>
        <p class="text">Are you looking for a free hosting service for your React application? If the application is for personal or development use, then GitPages may be a great alternative to more traditional website hosting services. </p>

        <p id="overview" className="subject">Prerequisites</p>

        <p id="overview" className="subject">Setting Up Your React Project</p>

        <p id="overview" className="subject">Setting Up Your Github Repository</p>

        <p id="overview" className="subject">Comments</p>

      </header>
    </div>
  );
}
export default Gitpages;
