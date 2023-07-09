import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Continents from './Continents';
import Destinations from './Destinations';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Countries from './Countries';

/*
- Continenets Category Page
- Country Category Page
- Destinations based on Country
-  Detail Page for each Country

*/

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Continents /> }/>
        <Route path='/countries/:continentID' element={<Countries /> }/>
        <Route path='/destinations/:countryID' element={<Countries /> }/>
      </Routes>
    </>
  )
}

export default App
