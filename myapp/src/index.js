import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import { Route } from "react-router"
import { HashRouter } from "react-router-dom"

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
        </div>
   </HashRouter >
    , app);

    
registerServiceWorker();
