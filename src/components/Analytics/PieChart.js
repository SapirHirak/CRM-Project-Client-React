import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Legend, Tooltip,Cell,Sector
} from 'recharts';

// import {
//     PieChart, Pie, Sector, Cell,
//   } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400  }, 
    { name: 'Group C', value: 300  },
    { name: 'Group E', value: 278}, 
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const data02 = [
    { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';
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
        return (
            <PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#9794d8" label />
               
                <Tooltip />
            </PieChart>
        );
    }
}