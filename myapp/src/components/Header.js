import React, { Component } from 'react';
// import logo from '../logo.svg';
// import header from '../../header.jpg'
import '../App.css';


export default class Header extends Component {
    //     constructor(props) {
    //     super(props)
    // }
                // <img src={logo} className="App-logo" alt="logo" />
                // <h2>Header!</h2>
    render() {
        return (
            <div>
                <img src='../../header2.jpg' 
                    className="Header-image" 
                    alt="background"/>
                <h2>Header!</h2>
            </div>
        );

    }
}