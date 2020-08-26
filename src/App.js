import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import NavBar from './containers/NavBar'
import MyTripsContainer from './containers/MyTripsContainer'
import TripActions from './containers/TripActions'



function App() {

  return (
  <div>
    <Header/>
    {/* <NavBar/> */}
    <div className='mainContainer'>

      <MyTripsContainer/>
      <TripActions />
    </div>
  </div>
  );
}

export default App;
