
import './App.css';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import { useState,useEffect } from 'react';
import moviesData from './Constants/Data';
import AddMovie from './Components/AddMovie';
import Trailer from './Components/Trailer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';




function App() {
  const [data,setData]=useState(moviesData)
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
 
  

  return (
    <div className="App">
    
    <Navigation  setSearch={setSearch} setRate={setRate} rate={rate}/>
   
   
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/MovieList' element={<MovieList data={data} search={search} rate={rate} setData={setData}/>}/>
    <Route path='/Trailer/:id' element={<Trailer data={data}/>}/>
    </Routes>
    </div>
  );
}

export default App;
