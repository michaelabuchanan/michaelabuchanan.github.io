import React from 'react';
import { NavLink } from "react-router-dom";

import './Article.css';

function Gans() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="breadcrumb"><code><NavLink exact activeClassName="active" style={{color: 'cyan'}} to="/">Articles</NavLink> &gt; GANs</code></p>

        <p>Generating New Sports Cars using GANs</p>
      </header>
    </div>
  );
}
export default Gans;
