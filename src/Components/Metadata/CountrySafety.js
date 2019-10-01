import React,{useEffect,useState} from 'react';
import axios from 'axios';
import fakedata from '../Map/data/fakedata.json';

function CountrySafety(){
    const [safety, setSafety] = useState(0);
    const [safetyPercent, setSafetyPercent] = useState(0);
    
    useEffect(() =>{
        let safetyRating = 0;
        fakedata.features.forEach((item) => {
            safetyRating += item.properties.density
        })
        safetyRating = safetyRating / fakedata.features.length;
        setSafety(safetyRating)
        let usSafetyPercent = safetyRating * 100 / 100000 
        setSafetyPercent(usSafetyPercent)
    },[])
    
    return (
        <div>
            <h1>Average safety rate of the United States</h1>
            <p>{safety} per 100,000</p>
            <h1>Average safety percent rate of the United States</h1> 
            <p>{safetyPercent}% per 100,000</p> 
        </div>
    )
}

export default CountrySafety;
