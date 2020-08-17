import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Gans from './pages/Gans'
import Gitpages from './pages/Gitpages'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
          <div className="content">
            <Route exact path="/" component={App}/>
            <Route path="/gans" component={Gans}/>
            <Route path="/gitpages" component={Gitpages}/>
          </div>
        </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
