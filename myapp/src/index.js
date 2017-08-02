import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MachineLearning from './MachineLearning'
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
// import { Route } from "react-router"
import { HashRouter, Route } from "react-router-dom"

WebFont.load({
  google: {
    families: ['Roboto:300,400,500', 'sans-serif']
  }
});

const app = document.getElementById('root');

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/MachineLearning" component={MachineLearning} />
        </div>
   </HashRouter >
    , app);

    
registerServiceWorker();
