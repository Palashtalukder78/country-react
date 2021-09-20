import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div id="countries">
            <h1 className='text-light pt-4'>Countries Info</h1>
            <div id="countries-container" className='row mx-auto'>
            {
                countries.map(country=> <Country
                    country={country}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;





















/* // import React from 'react';
import Country from './component/Country/Country';
import { useEffect, useState } from 'react';
const Countries = () => {
    return (
        <div >
            const [countries,setCountries] = useState([]);
            useEffect(()=>{
                fetch('https://restcountries.eu/rest/v2/all')
                    .then(res => res.json())
                    .then(data => setCountries(data))
            },[])
            return (
            <div id='countries'>
                <h1 className="text-warning">Countries Review</h1>
                <div className='countries-container'>
                    {
                        countries.map(country => <Country
                            country={country}
                        ></Country>)
                    }
                </div>
            </div>
            )
        </div>
    );
};

export default Countries; */