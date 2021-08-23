import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga'

import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Gans from './pages/Gans'
import Gitpages from './pages/Gitpages'
import Classifier from './pages/Classifier'
import Coral from './pages/Coral'
import Dsm from './pages/Dsm'
import Gym from './pages/Gym'
import About from './pages/About'

ReactGA.initialize('G-N12TQ5FBD5');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
          <div className="content">
            <Route exact path="/" component={App}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/gans" component={Gans}/>
            <Route path="/gitpages" component={Gitpages}/>
            <Route path="/class" component={Classifier}/>
            <Route path="/blog" component={Blogs}/>
            <Route path="/coral" component={Coral}/>
            <Route path="/dsm" component={Dsm}/>
            <Route path="/gym" component={Gym}/>
          </div>
        </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
