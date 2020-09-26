import React, { PureComponent } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

// const data = [
//     {
//         name: 'Page A', sales: 800,
//     },
//     {
//         name: 'Page B', sales: 967,
//     },
//     {
//         name: 'Page C', sales: 1098,
//     },
//     {
//         name: 'Page C', sales: 1098,
//     },
//     {
//         name: 'Page C', sales: 1098,
//     },
//     {
//         name: 'Page C', sales: 1098,
//     },
//     {
//         name: 'Page C', sales: 1098,
//     },
   
// ];

export default class EmploeeChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';
    countOwner = () => {
        let countOwner = {}
        let data = [] //will be the array
        let counter = 0
        this.props.allClients.map(client => {
            if (!countOwner[client.owner]) {
                countOwner[client.owner] = 1
                data.push({name: client.owner , sales: 1})
                counter = counter+1
            }
            else {
                let currentNumber = countOwner[client.owner] + 1
                countOwner[client.owner] = currentNumber
                data.map(obj => {
                    if(obj.name == client.owner) {
                        obj.sales= currentNumber}} )
            }
        })
        console.log(data)
      
        return data
    }




    render() {
        this.countOwner()
        return (

            <ComposedChart
                layout="vertical"
                width={550}
                height={300}
                data={this.countOwner()}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" barSize={20} fill="#9966ff
" />

            </ComposedChart>
        );
    }
}
