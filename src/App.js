import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<Home/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
