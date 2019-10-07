import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  

export default function HooksRecharts() {
    const [data,setData] = useState([
        {
          year: '2010', total: 4000, crime: 2400, amt: 2400,
        },
        {
          year: '2011', total: 3000, crime: 1398, amt: 2210,
        },
        {
          year: '2012', total: 2000, crime: 9800, amt: 2290,
        },
        {
          year: '2013', total: 2780, crime: 3908, amt: 2000,
        },
        {
          year: '2014', total: 1890, crime: 4800, amt: 2181,
        },
        {
          year: '2015', total: 2390, crime: 3800, amt: 2500,
        },
        {
          year: '2016', total: 3432, crime: 4300, amt: 2100,
        },
        {
          year: '2017', total: 3490, crime: 2000, amt: 2100,
        },
        {
          year: '2018', total: 3490, crime: 1000, amt: 2100,
        },
      ]);
    useEffect(() => {
    axios.get("poggers")
    .then((res) => {
        setData(res.data.data);
        console.log(res.data.data)
    }).catch((err) => {
        console.error(err)
    })

    }, [])
    return (
        <div>
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top:5, right: 30, left: 20, bottom:5
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30EAEA"/>
                <XAxis dataKey="name" stroke="#0dd9d9"/>
                <YAxis stroke="#39ff14"/>
                <Tooltip/>
                <Legend/>
                <Line type="monotoneX" dataKey="total" stroke="#39ff14" activeDot={{r:8}}/>
                <Line type="monotoneY" dataKey="crime" stroke="#0DD9D9"/>
            </LineChart>
        </div>
    )
}
