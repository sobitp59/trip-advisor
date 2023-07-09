import React from 'react'
import { data } from './db'
import {Link} from "react-router-dom";


const Continents = () => {
  return (
    <div>
        <h1>Welcome To Trip Advisor</h1>
        <h2>Top Continents For Your Next Holoday</h2>
        <ul className='continents'>
            {data?.continents?.map(({id, name, image}) => (
                <Link key={id} to={`/countries/${id}`}>
                    <li className='continents__lists' >
                        <img className='continents__image' src={image} alt={name} />
                        <p><strong>{name}</strong></p>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Continents