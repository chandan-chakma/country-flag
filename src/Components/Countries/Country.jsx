import React, { useState } from 'react';
import './country.css'

const Country = ({country}) => {
    console.log(country)
    const [visited,setVisited]=useState(false);
    const handleVisit=()=>{
        // console.log("click");
        // setVisited(true);
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // setVisited(visited?false:true)
        setVisited(!visited)

    }
    return (
        <div className={`countries ${visited && 'visited-country' }`}>
            <div className='country'>
                <h3>Countery namne: {country.name.common}</h3>
                <p>Area: {country.area.area}</p>
                <img src={country.flags?.flags.png} alt="" />

                <button onClick={handleVisit}>{visited?"visited":'Not Visited'}</button>
            
            </div>
        </div>
        
    );
};

export default Country;