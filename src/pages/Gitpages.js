import React from 'react';
import { NavLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

import './Article.css';

function Gitpages() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="breadcrumb"><code><NavLink exact activeClassName="active" style={{color: 'cyan'}} to="/">Articles</NavLink> &gt; Git-Pages</code></p>

        <p>How to host your React app on Git-Pages for free </p>

        <Paper elevation={3} />
      </header>
    </div>
  );
}
export default Gitpages;
