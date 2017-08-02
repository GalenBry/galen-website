import React from "react";
// import * as Colors from 'material-ui/styles/colors';
import { HashRouter, Route } from "react-router-dom"

//Styles
import '../App.css';

//Components
// import AppDrawer from './Drawer'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import NavMenu from 'material-ui/svg-icons/navigation/menu';


export default class AppBarMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, padding: 0 , paddingRight: 0};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    render() {
        var titleStyle = 
        {   cursor: 'pointer',
            color: 'black',
            fontFamily: 'Lobster, cursive',
        };

        var navStyle = 
        {   
            paddingLeft: this.state.padding,
            paddingRight: this.state.paddingRight,
        };


        return (
            <div>
                <AppBar 
                    zDepth={5}
                    title={<span style={titleStyle}>Galen Bryant</span>}
                    className="App-bar"
                    onTitleTouchTap={titleTouchTap}
                    iconElementRight={<FlatButton label="Login" />}
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                    iconElementLeft={<IconButton style={navStyle}><NavMenu/></IconButton> }
                />
                <Drawer 
                  className="App-drawer" 
                  open={this.state.open}
                  docked={false}
                  onRequestChange={this.toggleDrawer}
                >

                  <SomeComponent />
                  <MenuItem onTouchTap={this.toggleDrawer}> Web Developement</MenuItem>
                  <MenuItem onTouchTap={this.toggleDrawer}> Classes</MenuItem>
                </Drawer> 
        
            </div>
        );

    }

    toggleDrawer(event) {
        this.setState(
            { open: !this.state.open },
            function() {
                var body = document.getElementById('body');
                if (this.state.open === true) {
                    this.setState({ padding: 256, paddingRight: 40 });
                    body.style.overflow = 'hidden';
                    
                }
                else {
                    this.setState({ padding: 0, paddingRight: 0  });
                    body.style.overflow = 'auto';
                }
            });
    }
}

function titleTouchTap() {
  alert('onTouchTap triggered on the title component');
}


const ButtonToNavigate = ({ title, history }) => (
  <MenuItem onTouchTap={() => history.push('/MachineLearning')}> Machine Learning</MenuItem>
);

const SomeComponent = () => (
  <Route path="/" render={(props) => <ButtonToNavigate {...props} />} />
)    
// <AppDrawer 
//                     open={ this.state.open } 
//                     callBack={(open) => this.setState({open})}
//                 />