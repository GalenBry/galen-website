import React, { Component } from 'react';
import '../App.css';
import Typing from 'react-typing-animation'

export default class Header extends Component {
    //     constructor(props) {
    //     super(props)
    // }

    // <img src='../../header2.jpg' 
    //     className="Header-image" 
    //     alt="background"/>    

    // <video className="Header-video" loop autoPlay>
    //   <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_1280p_1mb.mp4" type="video/mp4"/>
    //   <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_1280p_1mb.mp4" type="video/ogg"/>
    //   Your browser does not support the video tag.
    // </video>

    render() {
        return (
            <div className="Header-container">
                <div>
                    <img src='../../header.jpg' 
                         className="Header-image" 
                         alt="background"
                    />
                </div>
                <div className="Header-typing">
                    <AnimatedTypingComponent />
                </div>
            </div>
        );

    }
}

const AnimatedTypingComponent = () => (
  <Typing loop='true'>
    <span>This span will get typed, then erased.</span>
    <Typing.Backspace count={50} />
  </Typing>
);