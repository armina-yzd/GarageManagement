import React from 'react';

import{ Routes, Route} from 'react-router-dom';
import About from './components/About';
import Feedback from './components/Feedback';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import { useState } from 'react';

const App = () =>  {

  
  return(

    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutus' element={<About />}></Route>
      <Route path='/feedback' element={<Feedback />}></Route>
      <Route path='/login' element={<LoginSignup />}></Route>
    </Routes>

  );
  
}

export default App;
