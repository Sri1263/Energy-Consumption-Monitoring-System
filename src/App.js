import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import UserLandingPage from './Components/UserLandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<Home/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/user' element={<UserLandingPage/>} />
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
