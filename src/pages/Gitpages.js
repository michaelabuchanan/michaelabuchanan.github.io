import React from 'react';
import { NavLink } from "react-router-dom";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HashLink as Link } from 'react-router-hash-link';

import react_logo from "../react_logo.jpg"
import git_sh from "../git_sh.png"

import './Article.css';

const code1 =  '1\tcd your-username.github.io\n2\tnpx create-react-app your-react-project-className\n3\tnpm install gh-pages --save-dev'

const code2 = '1\t{\n2\t"name": "michaelabuchanan",\n3\t"homepage": "http://michaelabuchanan.github.io",\n4\t"version": "0.1.0",\n5\t"private": true,\n6\t"dependencies": {\n7\t"@material-ui/core": "^4.11.0",\n8\t"@testing-library/jest-dom": "^4.2.4",\n9\t"@testing-library/react": "^9.3.2",\n10\t"@testing-library/user-event": "^7.1.2",\n11\t"react": "^16.13.1",\n12\t"react-dom": "^16.13.1",\n13\t"react-router-dom": "^5.2.0",\n14\t"react-scripts": "3.4.3",\n15\t"react-syntax-highlighter": "^13.5.0"\n16\t},\n17\t"scripts": {\n18\t"start": "react-scripts start",\n19\t"predeploy": "npm run build",\n20\t"deploy": "gh-pages -d build",\n21\t"build": "react-scripts build",\n22\t"test": "react-scripts test",\n23\t"eject": "react-scripts eject"\n24\t},\n25\t...'

const code3 = '1\tnpm run deploy'

function Gitpages() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="breadcrumb"><code><NavLink exact activeClassName="active" style={{color: 'cyan'}} to="/">Articles</NavLink> &gt; Git-Pages</code></p>

        <p><strong>How to host your React app on Git-Pages for free </strong></p>
        <img src={react_logo} alt="react logo" height="350" width="500"/>
        <p className="contents"><code><span className="blue"><Link to="gitpages#overview">Overview</Link></span> -&gt; <span className="blue"><Link to="gitpages#pre">Prerequisites</Link></span> -&gt; <span className="green"><Link to="gitpages#react">Setup React Project</Link></span> -&gt; <span className="green"><Link to="gitpages#repo">Setup GitHub Repo</Link></span> -&gt; <span className="blue"><Link to="gitpages#comments">Comments</Link></span></code></p>

        <p id="overview" className="subject"><strong>Overview</strong></p>
        <p class="text">Are you looking for a free hosting service for your React application? If the application is for personal or development use, then GitPages may be a great alternative to more traditional website hosting services. </p>

        <p id="pre" className="subject"><strong>Prerequisites</strong></p>
          <ul className="text list">
            <li>Installed Node.js, NPM, and NPX</li>
            <li>Installed React</li>
            <li>Have a Github account</li>
          </ul>

        <p id="react" className="subject"><strong>Setting Up Your React Project</strong></p>

        <p className="text">First, create a GitHub repo for your website. Using the name <code>your-username.github.io</code> is recommended. Open a terminal and clone your new repo. Now run the following commands to create your React project and install <code>gh-pages</code>. </p>
          <p className="text"><SyntaxHighlighter className="codebox" language="bash" style={dracula}>
          {code1}
</SyntaxHighlighter></p>

        <p className="text">After <code>gh-pages</code> has successfully been installed, open the file <code>package.json</code> which should have been created in your directory by the above <code>create-react-app</code> command. Then, add the <code>homepage</code>, <code>predeploy</code>, and <code>deploy</code> lines shown below on lines 3, 19, and 20 to your file. For the <code>homepage</code> field, enter the url <code>http://your-git-username.github.io</code>.</p>
        <p class="text"><SyntaxHighlighter className="codebox" language="json" style={dracula}>
          {code2}
</SyntaxHighlighter></p>

        <p className="text">Now you should be able to run the <code>npm</code> command below to build the website content for GitHub to display. You should see "Published" after this command runs if it runs successfully.</p>
        <p className="text"><SyntaxHighlighter className="codebox" language="json" style={dracula}>
          {code3}
</SyntaxHighlighter></p>

        <p id="repo" className="subject"><strong>Setting Up Your Github Repository</strong></p>

        <p className="text">Your website is now build but you may still need to change some settings in your GitHub repo to make it viewable. If you go to <code>Settings</code> in your repo and scroll down, you should find a section titled <code>GitHub Pages</code>. It should look something like the screenshot below. </p>

        <img src={git_sh} alt="react logo" height="400" width="700"/>
        <p className="text">Make sure the <code>Branch</code> option has the <code>gh-pages</code> selected and leave the directory it looks for at / (root). After confirming these settings, you should be able to go to the link shown in these settings to see your published page. Note that it may take a few minutes for the site to be published so don't be alarmed if it doesn't appear immidiately.</p>


        <p id="comments" className="subject"><strong>Comments</strong></p>

      </header>
    </div>
  );
}
export default Gitpages;
