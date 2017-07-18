import React, { Component } from 'react';
import './App.css';

// Material-UI dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import Header from './components/Header'
import AppBarMain from './components/AppBarMain'
import Body from './components/Body'
import Footer from './components/Footer'


injectTapEventPlugin(); // http://stackoverflow.com/a/34015469/988941


const customTheme = {
  palette: { 
    primary1Color: Colors.red500,
    // primary2Color: Colors.teal500,
    // primary3Color: Colors.blue500,
    alternateTextColor: Colors.red50
  }
};

const theme = getMuiTheme(customTheme);

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ theme }>
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

