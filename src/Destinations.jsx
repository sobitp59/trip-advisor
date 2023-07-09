import React from 'react';

import { Link, useParams } from "react-router-dom";
import { data } from './db';

const Destinations = () => {
    const {countryID, continentID} = useParams();

    const continent = data?.continents?.filter(({id}) => id === Number(continentID))
    const [{countries} = {}] = continent ?? [];
    
    const country = countries?.filter(({id}) => id === Number(countryID))
    const [{name, destinations} = {}] = country ?? [];


  return (
    <div>
        <h1>Top Destinations in {name} for your next Holiday</h1>
        <ul className='destinations'>
           {destinations?.map((destination) => (
                <Link key={destination?.id} to={`/destinations/detail/${continentID}/${countryID}/${destination?.id}`}>
                    <li className='destinations__lists'>
                        <img className='destinations__image' src={destination?.image} alt={destination?.name} />
                        <p><strong>{destination?.name}</strong></p>
                    </li>
                </Link>
           ))} 
        </ul>
    </div>
  )
}

export default Destinations