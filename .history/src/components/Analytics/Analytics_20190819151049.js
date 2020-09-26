import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EmploeeChart from './EmploeeChart'
import FourChart from './FourChart'
import FontAwesome from './FontAwesome'
import SalesChart from './SalesChart'
import PieChart from './PieChart'
import OptionsSalesBy from './OptionsSalesBy'
import '../styles/Analytics.css'

class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "" 
        }
    }

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    handleInput = (event) => {
        let nameVal = event.target.value
        let input = event.target.name
        this.setState({ [input]: nameVal })
    }

    render() {

        return (
            <div>
                <FontAwesome allClients={this.props.allClients} />

                <span class="EmploeeChart">
                    <span><h5>Top Emploee :</h5></span><EmploeeChart allClients={this.props.allClients} />
                    <span>
                       <div  className="input"><h5>Sales by :</h5><input onChange={this.handleInput} list="options" name="owner" />
                       <OptionsSalesBy  />
                       </div>
                        <datalist id="options">
                            {/* {this.props.owners.map(owner => <option value={owner} />)} */}
                        </datalist>
                    </span>
                    <SalesChart allClients={this.props.allClients} />
                </span>
                <div className="PieChart"><h5> Client Aquisition :</h5>
                    <PieChart allClients={this.props.allClients}/>
                </div>

                <div class="areaChart">
                    <h4>Sales Since Aug 30:</h4>
                    <FourChart />
                </div>
            </div>
        );
    }
}



export default Analytics;