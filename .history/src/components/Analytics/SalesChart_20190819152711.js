import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A', sales: 4000, 
//   },
//   {
//     name: 'Page B', sales: 3000, 
//   },
//   {
//     name: 'Page C', sales: 2000, 
//   },
//   {
//     name: 'Page D', sales: 2780,
//   },
//   {
//     name: 'Page E', sales: 1890,  
//   },
//   {
//     name: 'Page F', sales: 2390, 
//   },
//   {
//     name: 'Page G', sales: 3490,
//   },
// ];

export default class SalesChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';


  salesByCountry = () => {
    let countCountry = {}
    let data = [] //will be the array
    this.props.allClients.map(client => {
        if (!countCountry[client.country]) {
            countCountry[client.country] = 1
            data.push({name: client.country , sales: 1})
        }
        else {
            let currentNumber = countCountry[client.country] + 1
            countCountry[client.country] = currentNumber
            data.map(obj => { //update the data for the chart
                if(obj.name == client.country) {
                    obj.sales= currentNumber}} )
        }
    })
    console.log(data)
    return data
}

salesByOwner = () => {

}

  render() {
    return (
      <BarChart
        width={800}
        height={300}
        data={this.salesByCountry()}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}
