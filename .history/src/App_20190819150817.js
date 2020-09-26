import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import Clients from "./components/Clients/Clients"
import Actions from './components/Actions/Actions'
import Analytics from './components//Analytics'



class App extends Component {
  constructor() {
    super()
    this.state = {
      Clients: [] ,
      page : 1 ,
    }
    
  }

  prevPage = () => {
    if(this.state.page == 1)
      return
    let pageNew = this.state.page
    pageNew = pageNew -1
    this.setState({page : pageNew})
    this.currentPage()
  }


  nextPage = () => {
    let pageNew = this.state.page
    pageNew = pageNew + 1
    this.setState({page : pageNew})
    this.currentPage()
  }

  currentPage = () => {
    let clientsNew = []
    let k = (this.state.page-1)*20
    let y = this.state.page*20

    for(let i = k ; i < y ; i++) {
      clientsNew.push(this.state.Clients[i])
    }
    console.log(clientsNew)

    return clientsNew
  }

  componentDidMount = async () => {
    let clients = await axios.get("http://localhost:8080/clinets")
   // console.log(clients.data)
    this.setState({ Clients: clients.data } , function() {console.log(this.state.Clients)})
  }


  render() {

   console.log(this.state.Clients)
    return (<Router>
      <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">OurCRM</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li> <Link to="/clients">Clients</Link></li>
            <li><Link to="/actions">Actions</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
          </ul>
        </div>
      </nav>
   

      <div className="App">
     
     
          <h1 id="fentities-title"></h1>

          <Route path="/clients" render={() => <Clients allClients = {this.state.Clients} page ={this.state.page} currentPage = {this.currentPage()} nextPage = {this.nextPage} prevPage = {this.prevPage}/>} />
          <Route path="/actions" render={() => <Actions allClients = {this.state.Clients} get = {this.componentDidMount}/>} />
          <Route path="/analytics" render={() => <Analytics allClients = {this.state.Clients} get = {this.componentDidMount}/>} />

        
      </div>
      </div>
    </Router>
    );
  }
}

export default App;
