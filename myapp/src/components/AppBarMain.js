import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import '../App.css';


const barStyles = {
  title: {
    cursor: 'pointer',
    color: 'white',
  },
};

export default class AppBarMain extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <AppBar 
                    title={<span style={barStyles.title}>My Website</span>} 
                    className="App-bar"
                    onTitleTouchTap={handleTouchTap}
                    iconElementRight={<FlatButton label="Login" />}
                />
            </div>
        );

    }
}

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}