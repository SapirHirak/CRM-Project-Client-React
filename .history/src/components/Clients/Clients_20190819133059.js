import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Client from './Client'
import '../../styles/Clients.css'

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            input: " ",
            option: 'Choose',
            filteredArray: []
        }
    }

    handleInput =async (event) => {
        let nameVal = event.target.value //the val of the input now
        let input = event.target.name //"input"
        await this.setState({ [input]: nameVal }) //input: France
    }

    update = (event) => {
        this.setState({ option: event.target.value }, function () {
            console.log(this.state.option)
        })
    }
    renderAllClients = () => {
        let arr = this.props.currentPage
        let option = this.state.option
        if (option == 'Choose') {
            if (arr[0]) { //the first running is undefined
                arr = this.props.currentPage
            }
            return arr.map(client => {
                return client ? <Client client={client} /> : null
            })
        }
        else {
            arr = this.props.allClients
            if (arr[0]) { //the first running is undefined
                arr = this.props.allClients.filter(m => m[option].toLowerCase().includes(this.state.input.toLowerCase()))
            }
            return arr.map(client => {
                return client ? <Client client={client} /> : null
            })
        }
    }


    render() {
        return (
            <div>
                <div>
                    <input id="name-input" placeholder="Search Somthing" name="input" onChange={this.handleInput} />

                    <select id="select-input" onChange={this.update}>
                        <option value='Choose'>Choose</option>
                        <option value='name'>Name</option>
                        <option value='country'>Country</option>
                        <option value="owner">owner</option>

                    </select>

                </div>


                <table id="dtMaterialDesignExample" class="table table-striped" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th class="th-sm">Name
      </th>
                            <th class="th-sm">Surname
      </th>
                            <th class="th-sm">Country
      </th>
                            <th class="th-sm">First Contact
      </th>
                            <th class="th-sm">Email
      </th>
                            <th class="th-sm">Sold
      </th>
                            <th class="th-sm">Owner
      </th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderAllClients()}
                    </tbody>

                </table>



                <div aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item" onClick={this.props.prevPage}><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">{(this.props.page * 20) - 20} - {(this.props.page * 20) - 1}</a></li>
                        <li class="page-item" onClick={this.props.nextPage}><a class="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div >



        );
    }
}

export default Clients;