import React from "react";
import AppBar from 'material-ui/AppBar';
import '../App.css';

export default class AppBarMain extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <AppBar title="My Website" className="App-bar"/>
            </div>
        );

    }
}