import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"
import Options from '../Options'


import '../styles/Actions.css'

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            //name
            //category
            //value

            addName: "",
            addSurname: "",
            addCountry: "",
            addOwner: ""
        }
    }


    allOwner = () => {
        // console.log(this.props.allClients)
        let allOwner = []
        let Checkobj = {}
        this.props.allClients.map(client => {
            if (!Checkobj[client.owner]) {
                allOwner.push(client.owner)
                Checkobj[client.owner] = client.owner
            }
        })
        console.log(allOwner)
        return allOwner
    }

    addNewInput = (event) => {
        let nameVal = event.target.value
        let input = event.target.name
        this.setState({ [input]: nameVal })
    }

    updateInput = (event) => { //update the input in the state
        let nameVal = event.target.value //the value of the current input
        let input = event.target.name //email/sold/owner
        input === "client" ?
            this.setState({ name: nameVal }) :
            this.setState({ category: input, value: nameVal }, function () { console.log(input + nameVal) })
    }


    updateSold = () => {
        this.setState({category: 'sold'})
        this.setState({value: true})
        this.updateClient()
    }

    updateClient = async () => { //will get client & email/owner/sale and updade
            let obj = {
                client: this.state.name,
                category: this.state.category,
                value: this.state.value
            }
            console.log(obj)
            await axios.put("http://localhost:8080/update", obj)
            this.props.get()
    }

    addClient = async () => {
        let client = {
            "name": this.state.addName + this.state.addSurname,
            "country": this.state.addCountry,
            "owner": this.state.addOwner,

        }
        await axios.post("http://localhost:8080/clinets", client)
        // console.log(clients.data)
        this.props.get()

    }

    render() {
        let owners = this.allOwner()
        return <div>
            <div className="update" >
                <h1 className="title">Update</h1>
                <div className="input" >Client : <input name="client" onChange={this.updateInput} placeholder="Client Name" /> </div>
                <div className="input">Declare Sale <button onClick={this.updateSold} name="sold" class="button">Declare</button></div>
                <div className="input">Send Email: <input name="email" onChange={this.updateInput} placeholder="Client Name" /> <button onClick={this.updateClient} class="button">Transfer</button></div>
                <div className="input">Transfem Ownership To : <input  onChange={this.updateInput} list="options" name="owner" /><Options owners={owners} /> <button onClick={this.updateClient} class="button">Transfer</button></div>
            </div>



            <div className="add">
                <h1 className="title">Add Client</h1>
                <div className="input">First Name : <input name="addName" onChange={this.addNewInput} placeholder="Client Name" /> </div>
                <div className="input">Surname : <input name="addSurname" onChange={this.addNewInput} placeholder="Client Name" /> </div>
                <div className="input">Country : <input name="addCountry" onChange={this.addNewInput} placeholder="Client Name" /> </div>
                <div className="input">Owner : <input name="addOwner" onChange={this.addNewInput} placeholder="Client Name" /> </div>
                <button onClick={this.addClient}>Add Client!</button>
            </div>
        </div>
    }
}

export default Actions;