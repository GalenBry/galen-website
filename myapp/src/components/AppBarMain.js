import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import * as Colors from 'material-ui/styles/colors';

import '../App.css';
import AppDrawer from './Drawer'


export default class AppBarMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, padding: 0 , paddingRight: 0};
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer(event) {
        this.setState(
            { open: !this.state.open },
            function() {
                var body = document.getElementById('body');
                if (this.state.open === true) {
                    this.setState({ padding: 256, paddingRight: 40 });
                    body.style.overflow = 'hidden';
                    // body.style.backgroundColor = Colors.grey800
                    // body.style.opacity = 0.6
                    
                }
                else {
                    this.setState({ padding: 0, paddingRight: 0  });
                    body.style.overflow = 'auto';
                    // body.style.backgroundColor = 'initial'
                    // body.style.opacity = 1
                }
            });
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
                    
                    className="App-bar"
                    onTitleTouchTap={titleTouchTap}
                    iconElementRight={<FlatButton label="Login" />}
                    onLeftIconButtonTouchTap={this.openDrawer}
                    iconElementLeft={<IconButton style={navStyle}><NavMenu/></IconButton> }
                />
                <AppDrawer open={ this.state.open } />
            </div>
        );

    }
}

function titleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

// const appDrawer = () => (
//     <Drawer open={ AppBarMain.sate.open }>
//         <MenuItem>Menu Item</MenuItem>
//         <MenuItem>Menu Item 2</MenuItem>
//     </Drawer>

// );