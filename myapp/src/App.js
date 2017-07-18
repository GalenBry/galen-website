import React, { Component } from 'react';
import './App.css';

// Material-UI dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header'
import AppBarMain from './components/AppBarMain'
import Body from './components/Body'
import Footer from './components/Footer'


injectTapEventPlugin(); // http://stackoverflow.com/a/34015469/988941


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-bar">
            <AppBarMain />
          </div>
          <div className="App-header">
            <Header />
          </div>
          <div className="App-body">
            <Body />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
