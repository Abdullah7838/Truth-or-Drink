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
import ScrollToTop from './components/ScrollToTop';
import Blog5 from './components/Blog5';
import QuizMode from './components/QuizMode';
import CarGame from './components/CarGame';

function App() {
  const [myusername, setMainUsername] = useState('')
  console.log(myusername);
  return (
    <Router>
      <ScrollToTop />
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

        <Route path="/offline-truth-or-drink" element={<OfflineDrink/>} />
        <Route path="/online-truth-or-drink" element={<OnlineDrink setMainUsername={setMainUsername} myusername={myusername}/>} />
        <Route path="/drink-room" element={<DrinkRooms setMainUsername={setMainUsername}/>} />
        <Route path="/create-drink-room" element={<CreateDrinkRoom setMainUsername={setMainUsername}/>} />
        <Route path="/onlined/:roomId" element={<OnlineD setMainUsername={setMainUsername} myusername={myusername}/>} />
        <Route path="/drooms/:roomId/dgame" element={<FullDrinkOnline myusername={myusername}/>} />
        <Route path='/spin' element={<SpinnerAlready/>}/>
        <Route path="/" element={<Home setMainUsername={setMainUsername} myusername={myusername}/>} />
        <Route  path="/ultimate-truth-and-drink" element={<TruthAndDrinks />}/>
        <Route path="/150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night" element={<Blog1 />} />
        <Route path="/110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets" element={<Blog2 />} />
        <Route path="/70-fun-truth-or-drink-questions-for-game-night" element={<Blog3 />} />
        <Route path="/80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night" element={<Blog4 />} />
        <Route path="/100-fun-truth-or-drink-questions-for-game-night" element={<Blog5 />} />
        <Route path='/quiz' element={<QuizMode/>}/>
         <Route path='/car' element={<CarGame/>}/>



        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;