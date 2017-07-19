import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class AppDrawer extends React.Component {

  static defaultProps = {
    open: false,
  }

  // componentWillUpdate() {
  //   console.log("test") // works
  // }

  render() {
    return (
        <Drawer open={ this.props.open }>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    );
  }
}