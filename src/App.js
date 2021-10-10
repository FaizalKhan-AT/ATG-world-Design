import React from 'react';
import './App.css';
import img from './Assets/images/forest.jpg'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Filter from './Components/Filter/Filter';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Banner/>
        <Filter/>
        <Posts/>
      </div>
    </>
  );
}

export default App;
