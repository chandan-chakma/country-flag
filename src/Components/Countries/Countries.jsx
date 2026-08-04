import React from 'react';
import { use } from 'react';
import Country from './Country';
import './country.css'
import { useState } from 'react';

const Countries = ({countriesPromiss}) => {
    const countriesData = use(countriesPromiss);
    // console.log(countries);
    const countries = countriesData.countries;
    const [visitedCountries,setVisitedCountries] =useState([]);

    const [visitedFlag,setVisitedFlag]= useState([]);
    const handleVisistedFlag=(flag)=>{
        // console.log('visited flag',flag)
        const newVisitedFlag=[...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
        
    }


    const handlevisitedCountry=(country)=>{
        // console.log(handlevisitedCountry);
        // console.log('country',country)
        // setVisitedCountries(country+1);
        // console.log(country)
        // console.log(country.length)
        // console.log(typeof country)
        console.log(visitedCountries)
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)
        


    }

    return (
        <div >
            <h1>in the countries: {countries.length}</h1>
            <h1>total visited:{visitedCountries.length}</h1>
            <h1>Total visited flag :{visitedFlag.length}</h1>
            <div className='visited-flag'>
                {
                    visitedFlag.map((flag,i)=><img key={i} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                 {
                countries.map(country=><Country key={country.ccn3.ccn3} country={country} handlevisitedCountry={handlevisitedCountry} handleVisistedFlag={handleVisistedFlag}></Country>)
                }
            </div>
           
        </div>
    );
};

export default Countries;