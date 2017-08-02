import React, { Component } from 'react';
import '../App.css';
import Typing from 'react-typing-animation'

// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };


export default class Header extends Component {
    //     constructor(props) {
    //     super(props)
    // }

    // <video className="Header-video" loop autoPlay>
    //   <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_1280p_1mb.mp4" type="video/mp4"/>
    //   <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_1280p_1mb.mp4" type="video/ogg"/>
    //   Your browser does not support the video tag.
    // </video>

    render() {
        return (
            <div className="Header-container">
                <img src='../../header.jpg' 
                     className="Header-image" 
                     alt="background"
                />
                <div className="Header-flex-box">
                    <TypingHeader />
                </div>
            </div>
        );

    }
}

// const TypingHeader = () => (
//     <div className="Header-typing">
//         <Typing loop={true} speed={80}>
//           <span>Website Design For The Modern World.</span>
//           <Typing.Delay ms={3000} />
//           <Typing.Backspace count={50}/>
//         </Typing>
//     </div>
// );

const TypingHeader = () => (
    <div className="Header-typing">
        <Typing speed={80}>
          <span>Website Design For The Modern World.</span>
        </Typing>
    </div>
);