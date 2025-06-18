import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import TMS from './components/TMS';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './NotFound';
import OfflineDrink from './components/OfflineDrink';
import OnlineDrink from './components/OnlineDrink';
import DrinkRooms from './components/DrinkRooms'
import CreateDrinkRoom from './components/CreateDrinkRoom'
import OnlineD from './components/OnlineD'
import FullDrinkOnline from './components/FullDrinkOnline';
import TruthAndDrinks from './components/TruthAndDrinks';
import Ultimate from './components/Ultimate';
import Disclaimer from './components/Disclaimer';
import Blogs from './components/Blogs';
import SpinnerAlready from './components/SpinnerAlready';

function App() {
  const [myusername, setMainUsername] = useState('')
  console.log(myusername);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tms" element={<TMS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/ultimate" element={<Ultimate />} />
        <Route path='/disclaimer' element={<Disclaimer/>}/>

        <Route path="/offlinetruthordrink" element={<OfflineDrink/>} />
        <Route path="/onlinetruthordrink" element={<OnlineDrink setMainUsername={setMainUsername} myusername={myusername}/>} />
        <Route path="/drinkroom" element={<DrinkRooms setMainUsername={setMainUsername}/>} />
        <Route path="/create-drink-room" element={<CreateDrinkRoom setMainUsername={setMainUsername}/>} />
        <Route path="/onlined/:roomId" element={<OnlineD setMainUsername={setMainUsername} myusername={myusername}/>} />
        <Route path="/drooms/:roomId/dgame" element={<FullDrinkOnline myusername={myusername}/>} />
        <Route path='/spin' element={<SpinnerAlready/>}/>
        <Route path="/" element={<Home setMainUsername={setMainUsername} myusername={myusername}/>} />
        <Route  path="/ultimatetruthanddrink" element={<TruthAndDrinks />}/>

        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;