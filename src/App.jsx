import React, { useState, Suspense, lazy } from "react";
import { Component } from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SpinnerAlready from "./components/SpinnerAlready";
import LoadingScreen from "./components/LoadingScreen";
import Subscriber from "./components/Subscriber.jsx";
import UnSubscribe from "./components/UnSubscribe.jsx";
import BotChatMode from "./components/BotChatMode.jsx";
import SupportMe from "./components/SupportMe.jsx";
import BuyMeACoffee from "./components/BuyMeACoffee.jsx";
import Cookies from "./components/Cookies.jsx";
import DMCA from "./components/DMCA.jsx";
import GdprCompliance from "./components/GdprCompliance.jsx";
import Home from "./components/Home";
import Blog6 from "./components/Blog6.jsx";
import Spicy from './components/Spicy.jsx'
import Couples from "./components/Couples.jsx";
import Cards from "./components/Cards.jsx";
import Extreme from "./components/Extreme.jsx";
import PopUpCommunity from "./components/PopUpCommunity.jsx";

//Community
import Main from './community/Main';
import Login from './community/Login';
import Signup from './community/Signup';
import CommunityHome from './community/CommunityHome.jsx.jsx';
import Profile from './community/Profile';
import Comments from './community/Comments';
import Account from './community/Account';
import CommunityNavbar from './community/CommunityNavbar';
import Admin from './Admin/Admin';
import CommunityNotFound from './community/CommunityNotFound';
import UsersAdmin from './Admin/UsersAdmin';
import Friends from './community/Friends';
import AdminLogin from './Admin/AdminLogin';


// Lazy-loaded components
const Privacy = lazy(() => import("./components/Privacy"));
const TMS = lazy(() => import("./components/TMS"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const NotFound = lazy(() => import("./NotFound"));
const OfflineDrink = lazy(() => import("./components/OfflineDrink"));
const OnlineDrink = lazy(() => import("./components/OnlineDrink"));
const DrinkRooms = lazy(() => import("./components/DrinkRooms"));
const CreateDrinkRoom = lazy(() => import("./components/CreateDrinkRoom"));
const OnlineD = lazy(() => import("./components/OnlineD"));
const FullDrinkOnline = lazy(() => import("./components/FullDrinkOnline"));
const TruthAndDrinks = lazy(() => import("./components/TruthAndDrinks"));
const Ultimate = lazy(() => import("./components/Ultimate"));
const Disclaimer = lazy(() => import("./components/Disclaimer"));
const Blogs = lazy(() => import("./components/Blogs"));
const HomeBlogs = lazy(() => import("./components/HomeBlogs"));
const Blog1 = lazy(() => import("./components/Blog1"));
const Blog2 = lazy(() => import("./components/Blog2"));
const Blog3 = lazy(() => import("./components/Blog3"));
const Blog4 = lazy(() => import("./components/Blog4"));
const Blog5 = lazy(() => import("./components/Blog5"));
const QuizMode = lazy(() => import("./components/QuizMode"));
const TruthRunning = lazy(() => import("./components/TruthRunning"));

function NavbarWrapper({ logout }) {
  const location = useLocation();


  if (location.pathname.startsWith('/community')) {
    return <CommunityNavbar logout={logout} />;
  }

  return <Navbar />;
}
class App extends Component {
  constructor(props) {
    super(props);

    const savedEmail = localStorage.getItem('email');
    const isAdminStored = localStorage.getItem('isAdmin') === 'true';

    this.state = {
      email: savedEmail || null,
      isLogin: !!savedEmail, 
      isAdmin: isAdminStored,
      myusername: "",
    };
  }
  setAdmin = () => {
    this.setState({ isAdmin: true }, () => {
      localStorage.setItem('isAdmin', 'true');
    });
  };

  setLogin = (email) => {
    localStorage.setItem('email', email);
    this.setState({ email, isLogin: true });
  };

  logout = () => {
    localStorage.removeItem('email');
    this.setState({ email: null, isLogin: false });
  };
  setMainUsername = (username) => {
  this.setState({ myusername: username });
};
render() {
    return (

    <Router>
      <BuyMeACoffee/>
      <ScrollToTop />
      {/* <Navbar /> */}
      <NavbarWrapper logout={this.logout} />
      <Subscriber />
      <PopUpCommunity/>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home setMainUsername={this.setMainUsername} myusername={this.state.myusername} />
            }
          />
          <Route path="/privacy-policy" element={<Privacy />} />
           <Route path="/dmca" element={<DMCA />} />
           <Route path="/gdpr-compliance" element={<GdprCompliance />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/terms-and-conditions" element={<TMS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ultimate" element={<Ultimate />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/offline-truth-or-drink" element={<OfflineDrink />} />
          <Route
            path="/online-truth-or-drink"
            element={
              <OnlineDrink
                setMainUsername={this.setMainUsername}
                myusername={this.state.myusername}
              />
            }
          />
          <Route
            path="/drink-room"
            element={<DrinkRooms setMainUsername={this.setMainUsername} />}
          />
          <Route
            path="/create-drink-room"
            element={<CreateDrinkRoom setMainUsername={this.setMainUsername} />}
          />
          <Route
            path="/onlined/:roomId"
            element={
              <OnlineD
                setMainUsername={this.setMainUsername}
                myusername={this.state.myusername}
              />
            }
          />
          <Route
            path="/drooms/:roomId/dgame"
            element={<FullDrinkOnline myusername={this.state.myusername} />}
          />
          <Route path="/spin" element={<SpinnerAlready />} />
          <Route
            path="/ultimate-truth-and-drink"
            element={<TruthAndDrinks />}
          />
          <Route
            path="/truth-or-drink-questions-spicy"
            element={<Spicy />}
          />
           <Route
            path="/truth-or-drink-for-couples"
            element={<Couples />}
          />
          <Route
            path="/truth-or-drink-card-game"
            element={<Cards />}
          />
          <Route
            path="/extreme-truth-or-drink-questions"
            element={<Extreme />}
          />
          <Route
            path="/150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night"
            element={<Blog1 />}
          />
          <Route
            path="/110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets"
            element={<Blog2 />}
          />
          <Route
            path="/70-fun-truth-or-drink-questions-for-game-night"
            element={<Blog3 />}
          />
          <Route
            path="/80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night"
            element={<Blog4 />}
          />
          <Route
            path="/100-fun-truth-or-drink-questions-for-game-night"
            element={<Blog5 />}
          />
          <Route
            path="/101-deep-truth-or-drink-questions-to-really-open-up"
            element={<Blog6 />}
          />
          <Route path="/quiz" element={<QuizMode />} />
          <Route path="/truth-running" element={<TruthRunning />} />
          <Route path="/unsubscribe" element={<UnSubscribe />} />
          <Route path="/quick-match" element={<BotChatMode />} />
          <Route path="/buy-me-a-coffee" element={<SupportMe />} />
          <Route path="/*" element={<NotFound />} />


          {/* Community Routes */}
          <Route path="community/login" element={<Login setLogin={this.setLogin} />} />
          <Route path="community/signup" element={<Signup setLogin={this.setLogin} />} />
          <Route
            path="community/home"
            element={<Main email={this.state.email} isLogin={this.state.isLogin} logout={this.logout} />}
          />
          <Route path="community/profile" element={<Profile email={this.state.email} logout={this.logout} isLogin={this.state.isLogin}/>} />
          <Route path="community/comments/:id" element={<Comments email={this.state.email} />} />
          <Route path="community/account/:email" element={<Account logout={this.logout} myemail={this.state.email} Uemail={this.state.email}/>} />
          <Route path="/admin" element={<Admin email={this.state.email} isAdmin={this.state.isAdmin}/>} />
           <Route path="/admin/login" element={<AdminLogin email={this.state.email} isAdmin={this.state.isAdmin} setAdmin={this.setAdmin}/>} />
          <Route path="/admin/:email" element={<UsersAdmin isAdmin={this.state.isAdmin} />} />
           <Route path="community/find/friends" element={<Friends email={this.state.email}/>} />
          <Route path="community/not-found" element={<CommunityNotFound />} />

          <Route path="community/" element={<CommunityHome email={this.state.email} />} />
        
        </Routes>
      </Suspense>

      <Footer />
    </Router>
 );
  }
}

export default App;
