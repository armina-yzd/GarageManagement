import{ Routes, Route} from 'react-router-dom';
import About from './components/About';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  
  return(
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutus' element={<About />}></Route>
      <Route path='/feedback' element={<Feedback />}></Route>
    </Routes>
    </>
  );
  
}

export default App;
