import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import NavBar from './containers/NavBar'
import MyTripsContainer from './containers/MyTripsContainer'



function App() {

  return (
  <>
    <Header/>
    {/* <NavBar/> */}
    <MyTripsContainer/>
  </>
  );
}

export default App;
