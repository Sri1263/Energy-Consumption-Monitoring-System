import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/WebsiteNavigation/Home';
import Login from './Components/WebsiteNavigation/Login'
import Contact from './Components/WebsiteNavigation/Contact';
import About from './Components/WebsiteNavigation/About';
import UserLandingPage from './Components/UserLoggedIn/UserLandingPage';

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
