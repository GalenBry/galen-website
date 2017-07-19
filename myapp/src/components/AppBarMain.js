import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import '../App.css';
import AppDrawer from './Drawer'
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';


var padding = 0;

var barStyles = {
  title: {
    cursor: 'pointer',
    color: 'black',
    fontFamily: 'Lobster, cursive', 
    paddingLeft: { padding },
  },
};

export default class AppBarMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer(event) {
        this.setState({ open: !this.state.open });
        if (this.state.open) {
            padding = 256;
        }
    }

    render() {

        return (
            <div>
                <AppDrawer open={ this.state.open } />
                <AppBar 
                    zDepth={2}
                    title={<span style={barStyles.title}>Galen Bryant</span>}
                    className="App-bar"
                    onTitleTouchTap={titleTouchTap}
                    iconElementRight={<FlatButton label="Login" />}
                    onLeftIconButtonTouchTap={this.openDrawer}
                />

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