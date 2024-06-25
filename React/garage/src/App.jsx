import React from 'react';

import{ Routes, Route} from 'react-router-dom';
import About from './components/About';
import Feedback from './components/Feedback';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import { useState } from 'react';
import ChangeInfo from './components/ChangeInfo';
import YourReserves from './components/YourReserves';

const App = () =>  {

  
  return(

    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutus' element={<About />}></Route>
      <Route path='/feedback' element={<Feedback />}></Route>
      <Route path='/login' element={<LoginSignup />}></Route>
      <Route path='/ChangeInfo' element={<ChangeInfo />}></Route>
      <Route path='/YourReserves' element={<YourReserves />}></Route>
    </Routes>

  );
  
}

export default App;
