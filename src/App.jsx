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
import HomeBlogs from './components/HomeBlogs';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';

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
        <Route path="/blogs/blog1" element={<Blog1 />} />
        <Route path="/blogs/blog2" element={<Blog2 />} />
        <Route path="/blogs/blog3" element={<Blog3 />} />
        <Route path="/blogs/blog4" element={<Blog4 />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;