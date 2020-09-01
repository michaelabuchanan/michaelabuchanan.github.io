import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import firebase from './firebase.js';

import Gans from './pages/Gans'
import Gitpages from './pages/Gitpages'
import Classifier from './pages/Classifier'
import Firebase from './pages/Firebase'
import Coral from './pages/Coral'
import Dsm from './pages/Dsm'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
          <div className="content">
            <Route exact path="/" component={App}/>
            <Route path="/gans" component={Gans}/>
            <Route path="/gitpages" component={Gitpages}/>
            <Route path="/class" component={Classifier}/>
            <Route path="/fire" component={Firebase}/>
            <Route path="/coral" component={Coral}/>
            <Route path="/dsm" component={Dsm}/>
          </div>
        </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
