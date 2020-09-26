import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/FontAwesome.css'

class FontAwesome extends Component {

    newClients = () => {
        let numNewClients = 0
        let currentMonth = new Date().getMonth()
        let currentYear = new Date().getFullYear()
        // console.log(this.props.allClients[0])
        let allClients = this.props.allClients
        if (allClients[0]) {
            // allClients.map(client => client.firstContact.getMonth() !== currentMonth ? null : numNewClients += 1)
            // console.log(allClients[2].firstContact.getFullYear())
            return numNewClients
        }
    }

    emailSent = () => {
        let numEmail = 0
        this.props.allClients.map(client => client.emailType !== null ? numEmail += 1 : null)
        console.log(numEmail)
        return numEmail
    }

    noSold = () => {
        let numNoSold = 0
        this.props.allClients.map(client => client.sold == false ? numNoSold += 1 : null)
        console.log(numNoSold)
        return numNoSold
    }

    hottestCountry = () => {
        let countries = {}  //France : 800
        this.props.allClients.map(client => {
            if (!countries[client.country]) {
                countries[client.country] = 1
            }
            else {
                let currentNumber = countries[client.country] + 1
                countries[client.country] = currentNumber

            }
        })
        console.log(countries)
        let maxCountry = ""
        let maxNumner = 0
        let allCountrys = Object.keys(countries)
        allCountrys.map(country => {
            if (countries[country] > maxNumner) {
                maxNumner = countries[country]
                maxCountry = country
            }
        })
        console.log(maxCountry)
        return maxCountry
    }

    render() {
        return (
            <div>
                <span>
                    <i id='awsomeProgress' class="fas fa-chart-line"></i>{this.newClients()} New Clients!
                   <i id='awsomeMail' class="fas fa-envelope" ></i>{this.emailSent()} Emails Sent
                    <span><i id='awsomeClient' class="fas fa-user-circle"></i></span>{this.noSold()} Standing Clients
                 <i id='awsomeEarth' class="fas fa-globe-americas"></i>{this.hottestCountry()} Hottest Country!
                 </span> </div>

        );
    }
}

export default FontAwesome;