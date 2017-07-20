import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class AppDrawer extends React.Component {

  static defaultProps = {
    open: false,
  }

  render() {

    const drawerStyle = {
      backgroundColor: 'white',
    }

    return (
        <Drawer className="App-drawer" open={ this.props.open }>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    );
  }
}