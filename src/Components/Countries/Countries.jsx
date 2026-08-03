import React from 'react';
import { use } from 'react';
import Country from './Country';
import './country.css'

const Countries = ({countriesPromiss}) => {
    const countriesData = use(countriesPromiss);
    // console.log(countries);
    const countries = countriesData.countries;

    return (
        <div >
            <h1>in the countries: {countries.length}</h1>
            <div className='countries'>
                 {
                countries.map(country=><Country key={country.ccn3.ccn3}country={country}></Country>)
                }
            </div>
           
        </div>
    );
};

export default Countries;