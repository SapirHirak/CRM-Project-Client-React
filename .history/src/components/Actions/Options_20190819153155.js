import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import Option from './Option'

//import '../styles/Option.css'

class Options extends Component {

    render() {
       // console.log(this.props.owners)
        return (
            <span
                <datalist id="options">
                {this.props.owners.map(owner => <option value={owner}/>)}
                </datalist>
            </span>
        );
    }
}

export default Options;