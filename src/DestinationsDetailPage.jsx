import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './db';

const DestinationsDetailPage = () => {

  const {continentID, countryID, destinationID} = useParams();

  const continent = data?.continents?.filter(({id}) => id === Number(continentID))
  const [{countries} = {}] = continent ?? [];
  
  const country = countries?.filter(({id}) => id === Number(countryID))
  const [{destinations} = {}] = country ?? [];

  const destination = destinations?.filter(({id}) => id === Number(destinationID))
  const [{description, image, location, name, openingHours, ratings, reviews, ticketPrice, website} = {}] = destination ?? [];

  console.log(destination)


  return (
    <div>
      <h1>{name}</h1>
      <div className='destination'>
        <div>
          <img className='destination__image' src={image} alt={name} />
        </div>
        <div className='destination__details'>
          <p><strong>description : </strong> {description}</p>
          <p><strong>ratings : </strong> {ratings}</p>
          <p><strong>reviews : </strong> {reviews}</p>
          <p><strong>openingHours : </strong> {openingHours}</p>
          <p><strong>location : </strong> {location}</p>
          <p><strong>ticketPrice : </strong> {ticketPrice}</p>
          <p><strong>website : </strong> <a href={website} target='_blank' rel="noreferrer">{name}</a></p>
        </div>
      </div>
    </div>
  )
}

export default DestinationsDetailPage