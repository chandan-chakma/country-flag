import React, { useState } from 'react';
import './country.css'

const Country = ({country, handlevisitedCountry,handleVisistedFlag}) => {
    // console.log(country)
    // console.log(handlevisitedCountry)
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
        setVisited(!visited);
        handlevisitedCountry(country);
    }
    return (
        <div className={`countries ${visited && 'visited-country' }`}>
            <div className='country'>
                <h3>Countery namne: {country.name.common}</h3>
                <p>Area: {country.area.area}</p>
                <img src={country.flags?.flags.png} alt="" />

                <button onClick={handleVisit}>{visited?"visited":'Not Visited'}</button>
                <button onClick={()=>handleVisistedFlag(country.flags.flags.png)}>Add Visited flag</button>
            
            </div>
        </div>
        
    );
};

export default Country;