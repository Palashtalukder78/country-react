import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,region,capital,population} = props.country;
    return (
        <div className='col-md-3'>
            <div id="country">
                <h4>{name} <small>({region})</small></h4>
                <img src={flag} alt="" />
                <h6>{capital}</h6>
                <h6>{population}</h6>
            </div>
        </div>
    );
};

export default Country;