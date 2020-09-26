import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../../styles/Clients.css'

class Client extends Component {

    render() {
        return (
          
                        <tr>
                            <th scope="col">{this.props.client.name.split(" ")[0]}</th>
                            <th scope="col">{this.props.client.name.split(" ")[1]}</th>
                            <th scope="col">{this.props.client.country}</th>
                            <th scope="col">{this.props.client.firstContact} </th>
                            <th scope="col">{this.props.client.email}</th>
                            <th scope="col">{this.props.client.sold ? <i id='awsomeNot' class="fas fa-check"></i> : <i id='awsomeNot' class="fas fa-times"></i>}</th>
                            <th scope="col">{this.props.client.owner}</th>

                        </tr>



        );
    }
}

export default Client;