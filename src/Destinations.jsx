import React from 'react';

import { Link, useParams } from "react-router-dom";
import { data } from './db';

const Destinations = () => {
    const {countryID} = useParams();
    const country = data?.continents?.filter(({id}) => id === Number(countryID))
    console.log(country)


  return (
    <div>Destinations</div>
  )
}

export default Destinations