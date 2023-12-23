import React from 'react';
import './App.css';
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Searchpage() {
  
  return <h1>This is the SEARCHPAGE</h1>;
}



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/Search' exact element={<Searchpage/>}/>
 
          <Route path='/' element={<Home/>}/>
            
            
                         
          
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
