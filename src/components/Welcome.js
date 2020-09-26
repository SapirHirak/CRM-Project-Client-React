import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import Option from './Option'
import '../styles/Welcome.css'

class Welcome extends Component {

    render() {

        return (
            <div>
                <h1 id="welcome">Welcome To OurCRM!</h1>
            <div className='info'>Here you can manege all your clients information <br></br>, add and also see results in charts</div>
            </div>
        );
    }
}

export default Welcome;