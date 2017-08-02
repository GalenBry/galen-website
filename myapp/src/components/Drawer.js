import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import onClickOutside from 'react-onclickoutside'

class AppDrawer extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {}
  }

  handleClickOutside = () => {
    console.log('onClickOutside() method called')
  }

  handleClose = () => this.setState({open: false});

  render() {

    return (
        <Drawer 
          className="App-drawer" 
          open={ this.props.open }
          docked={ false }
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}> Machine Learning</MenuItem>
          <MenuItem onTouchTap={this.handleClose}> Web Developement</MenuItem>
          <MenuItem onTouchTap={this.handleClose}> Classes</MenuItem>
        </Drawer>
    );
  }
}

export default onClickOutside(AppDrawer)