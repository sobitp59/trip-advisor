import React from 'react';
import { Link, useParams } from "react-router-dom";
import { data } from './db';

const Countries = () => {
    const {continentID} = useParams();
    const continent = data?.continents?.filter(({id}) => id === Number(continentID))
    console.log(continent)
    const [{name, countries}] = continent; 
  
    return (
    <div>
        <h1>Top Countries in {name} for your next Holiday</h1>
        <ul className='countries'>
           {countries?.map((country) => (
                <Link key={country?.id} to={`/destinations/${country?.id}`}>
                    <li className='countries__lists'>
                        <img className='countries__image' src={country?.image} alt={country?.name} />
                        <p><strong>{country?.name}</strong></p>
                    </li>
                </Link>
           ))} 
        </ul>
    </div>
  )
}

export default Countries