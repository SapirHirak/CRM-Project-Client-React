import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import Option from './Option'

//import '../styles/Option.css'

class OptionsSalesBy extends Component {

    render() {
        // console.log(this.props.owners)
        return (
            <span>


                <datalist id="options">
                    <option value="country">Dog</option>
                    <option value="email">Email</option>
                    <option value="month">month</option>
                    <option value="owner">owner</option>
                </datalist>
            </span>
        );
    }
}

export default OptionsSalesBy;