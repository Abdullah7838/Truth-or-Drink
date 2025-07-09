import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SpinnerAlready from './components/SpinnerAlready'; // fallback loader

// Lazy-loaded components
const Home = lazy(() => import('./components/Home'));
const Privacy = lazy(() => import('./components/Privacy'));
const TMS = lazy(() => import('./components/TMS'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const NotFound = lazy(() => import('./NotFound'));
const OfflineDrink = lazy(() => import('./components/OfflineDrink'));
const OnlineDrink = lazy(() => import('./components/OnlineDrink'));
const DrinkRooms = lazy(() => import('./components/DrinkRooms'));
const CreateDrinkRoom = lazy(() => import('./components/CreateDrinkRoom'));
const OnlineD = lazy(() => import('./components/OnlineD'));
const FullDrinkOnline = lazy(() => import('./components/FullDrinkOnline'));
const TruthAndDrinks = lazy(() => import('./components/TruthAndDrinks'));
const Ultimate = lazy(() => import('./components/Ultimate'));
const Disclaimer = lazy(() => import('./components/Disclaimer'));
const Blogs = lazy(() => import('./components/Blogs'));
const HomeBlogs = lazy(() => import('./components/HomeBlogs'));
const Blog1 = lazy(() => import('./components/Blog1'));
const Blog2 = lazy(() => import('./components/Blog2'));
const Blog3 = lazy(() => import('./components/Blog3'));
const Blog4 = lazy(() => import('./components/Blog4'));
const Blog5 = lazy(() => import('./components/Blog5'));
const QuizMode = lazy(() => import('./components/QuizMode'));
const TruthRunning = lazy(() => import('./components/TruthRunning'));
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [myusername, setMainUsername] = useState('');

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home setMainUsername={setMainUsername} myusername={myusername} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tms" element={<TMS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ultimate" element={<Ultimate />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/offline-truth-or-drink" element={<OfflineDrink />} />
          <Route path="/online-truth-or-drink" element={<OnlineDrink setMainUsername={setMainUsername} myusername={myusername} />} />
          <Route path="/drink-room" element={<DrinkRooms setMainUsername={setMainUsername} />} />
          <Route path="/create-drink-room" element={<CreateDrinkRoom setMainUsername={setMainUsername} />} />
          <Route path="/onlined/:roomId" element={<OnlineD setMainUsername={setMainUsername} myusername={myusername} />} />
          <Route path="/drooms/:roomId/dgame" element={<FullDrinkOnline myusername={myusername} />} />
          <Route path="/spin" element={<SpinnerAlready />} />
          <Route path="/ultimate-truth-and-drink" element={<TruthAndDrinks />} />
          <Route path="/150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night" element={<Blog1 />} />
          <Route path="/110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets" element={<Blog2 />} />
          <Route path="/70-fun-truth-or-drink-questions-for-game-night" element={<Blog3 />} />
          <Route path="/80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night" element={<Blog4 />} />
          <Route path="/100-fun-truth-or-drink-questions-for-game-night" element={<Blog5 />} />
          <Route path="/quiz" element={<QuizMode />} />
          <Route path="/truth-running" element={<TruthRunning />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
